import {Text, StateField, Range, EditorSelection} from "@codemirror/state"
import {EditorView, Decoration, DecorationSet} from "@codemirror/view"
import {ConflictWidget} from "./widgets.js"

export class ConflictSide {
  constructor(
    readonly text: string,
    readonly label: string,
  ) {}
}

export class Conflict {
  constructor(
    readonly ours: ConflictSide,
    readonly theirs: ConflictSide,
    readonly base: ConflictSide | null
  ) {}
}

const enum State { Before, Ours, Base, Theirs, Done }

class Match {
  state = State.Before
  ourLabel = ""
  ourText: string[] = []
  theirLabel = ""
  theirText: string[] = []
  baseLabel: null | string = null
  baseText: string[] = []
  startPos = -1

  constructor(public pos: number) {}

  finish() {
    return new Conflict(new ConflictSide(this.ourText.join("\n"), this.ourLabel),
                        new ConflictSide(this.theirText.join("\n"), this.theirLabel),
                        this.baseLabel == null ? null : new ConflictSide(this.baseText.join("\n"), this.baseLabel))
  }

  matchLine(line: string) {
    let m
    if (this.state == State.Before) {
      if (m = /^<{7} (.+)/.exec(line)) {
        this.startPos = this.pos
        this.ourLabel = m[1]
        this.state = State.Ours
      }
    } else if (this.state == State.Ours) {
      if (m = /^\|{7} (.+)/.exec(line)) {
        this.baseLabel = m[1]
        this.state = State.Base
      } else if (m = /^={7}$/.exec(line)) {
        this.state = State.Theirs
      } else {
        this.ourText.push(line)
      }
    } else if (this.state == State.Base) {
      if (m = /^={7}$/.exec(line)) {
        this.state = State.Theirs
      } else {
        this.baseText.push(line)
      }
    } else {
      if (m = /^>{7} (.+)/.exec(line)) {
        this.state = State.Done
        this.theirLabel = m[1]
      } else {
        this.theirText.push(line)
      }
    }
    this.pos += line.length + 1
    return this.state == State.Done
  }
}

function matchConflicts(doc: Text) {
  let deco: Range<Decoration>[] = []
  let iter = doc.iterLines(), match = new Match(0)
  while (!iter.next().done) {
    if (match.matchLine(iter.value)) {
      deco.push(Decoration.replace({
        widget: new ConflictWidget(match.finish()),
        block: true,
      }).range(match.startPos, match.pos - 1))
      match = new Match(match.pos)
    }
  }
  return Decoration.set(deco)
}

function hasConflictMarker(doc: Text, from: number, to: number) {
  let iter = doc.iterLines(doc.lineAt(from).number, doc.lineAt(to).number + 1)
  while (!iter.next().done) if (/^(<{7} |\|{7} |>{7} |={7}$)/.test(iter.value)) return true
  return false
}

export const conflicts = StateField.define<DecorationSet>({
  create: s => matchConflicts(s.doc),
  update(conflicts, tr) {
    if (tr.changes.empty) return conflicts
    let del: number[] = [], recompute = false
    tr.changes.iterChangedRanges((fromA, toA, fromB, toB) => {
      if (hasConflictMarker(tr.state.doc, fromB, toB)) recompute = true
      conflicts.between(fromA, toA, (cFrom, cTo) => {
        if (cFrom <= toA && cTo >= fromA) del.push(cFrom)
      })
    })
    return recompute ? matchConflicts(tr.state.doc)
      : (del.length ? conflicts.update({filter: from => del.indexOf(from) == -1}) : conflicts).map(tr.changes)
  },
  provide: f => EditorView.decorations.from(f)
})

export function acceptAllConflicts(view: EditorView, side: "ours" | "base" | "theirs") {
  let field = view.state.field(conflicts, false)
  if (!field || !field.size) return false
  let changes: {from: number, to: number, insert: string}[] = []
  field.between(0, view.state.doc.length, (from, to, deco) => {
    let {conflict} = deco.spec.widget as ConflictWidget
    let chunk = conflict[side]
    if (chunk) changes.push({from, to, insert: chunk.text})
  })
  view.dispatch({changes, userEvent: "conflict.accept.all." + side})
  return true
}

export function deleteAllConflicts(view: EditorView) {
  let field = view.state.field(conflicts, false)
  if (!field || !field.size) return false
  let changes: {from: number, to: number}[] = []
  field.between(0, view.state.doc.length, (from, to) => {changes.push({from, to})})
  view.dispatch({changes, userEvent: "conflict.delete.all"})
  return true
}

// FIXME move focus to actual conflict

function selectConflict(view: EditorView, userEvent: string, select: (conflicts: {from: number, to: number}[]) => number) {
  let field = view.state.field(conflicts, false)
  if (!field || !field.size) return false
  let ranges: {from: number, to: number}[] = []
  field.between(0, view.state.doc.length, (from, to) => {ranges.push({from, to})})
  let range = ranges[select(ranges)]
  view.dispatch({
    selection: {anchor: range.from},
    userEvent: "select.conflict." + userEvent,
    effects: EditorView.scrollIntoView(EditorSelection.range(range.from, range.to))
  })
  return true
}

export function selectFirstConflict(view: EditorView) {
  return selectConflict(view, "first", () => 0)
}
  
export function selectLastConflict(view: EditorView) {
  return selectConflict(view, "last", rs => rs.length - 1)
}

export function selectNextConflict(view: EditorView) {
  let {head} = view.state.selection.main
  return selectConflict(view, "next", rs => Math.max(0, rs.findIndex(r => r.from > head)))
}

export function selectPrevConflict(view: EditorView) {
  let {head} = view.state.selection.main
  return selectConflict(view, "next", ranges => {
    let found = ranges.length - 1
    for (let i = 0; i < ranges.length; i++) if (ranges[i].to < head) found = i
    return found
  })
}
