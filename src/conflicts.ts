import {Text, StateField, Range, Extension} from "@codemirror/state"
import {EditorView, Decoration, DecorationSet, lineNumberWidgetMarker} from "@codemirror/view"
import {theme, ConflictWidget, conflictGutterMarker} from "./widgets.js"

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

const conflicts = StateField.define<DecorationSet>({
  create: s => matchConflicts(s.doc),
  update(conflicts, tr) {
    if (tr.changes.empty) return conflicts
    let del: number[] = [], recompute = false
    tr.changes.iterChangedRanges((from, to) => {
      if (hasConflictMarker(tr.state.doc, from, to)) recompute = true
      conflicts.between(from, to, (cFrom, cTo) => {
        if (cFrom < to && cTo > from) del.push(cFrom)
      })
    })
    return recompute ? matchConflicts(tr.state.doc)
      : (del.length ? conflicts.update({filter: from => del.indexOf(from) == -1}) : conflicts).map(tr.changes)
  },
  provide: f => EditorView.decorations.from(f)
})

export function gitConflicts(): Extension {
  return [
    conflicts,
    theme,
    lineNumberWidgetMarker.of((view, widget) => {
      return widget instanceof ConflictWidget ? conflictGutterMarker : null
    })
  ]
}
