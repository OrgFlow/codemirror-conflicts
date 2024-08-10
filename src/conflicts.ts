import {Text, StateField, Range, Extension} from "@codemirror/state"
import {EditorView, Decoration, DecorationSet, lineNumberWidgetMarker} from "@codemirror/view"
import {theme, ConflictWidget, conflictGutterMarker} from "./widgets.js"

const conflicts = StateField.define<DecorationSet>({
  create: s => matchConflicts(s.doc),
  update(conflicts, tr) {
    if (!tr.changes.empty) {
      let del: number[] = []
      tr.changes.iterChangedRanges((from, to) => {
        conflicts.between(from, to, (cFrom, cTo) => {
          if (cFrom < to && cTo > from) del.push(cFrom)
        })
      })
      if (del.length)
        conflicts = conflicts.update({filter: from => del.indexOf(from) == -1})
      conflicts = conflicts.map(tr.changes)
    }
    return conflicts
  },
  provide: f => EditorView.decorations.from(f)
})

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

function matchConflicts(doc: Text) {
  let conflict = /(?:^|(?<=\n))<<<<<<< (.*)\n([^]*?)\n(?:\|\|\|\|\|\|\| (.*)\n([^]*?)\n)?=======\n([^]*?)\n>>>>>>> (.*)/g
  let text = doc.toString(), m
  let deco: Range<Decoration>[] = []
  while (m = conflict.exec(text)) {
    let [_, ourLabel, ours, baseLabel, base, theirs, theirLabel] = m
    let conflict = new Conflict(new ConflictSide(ours, ourLabel),
                                new ConflictSide(theirs, theirLabel),
                                baseLabel ? new ConflictSide(base, baseLabel) : null)
    deco.push(Decoration.replace({
      widget: new ConflictWidget(conflict),
      block: true,
    }).range(m.index, m.index + _.length))
  }
  return Decoration.set(deco)
}

export function gitConflicts(): Extension {
  return [
    conflicts,
    theme,
    lineNumberWidgetMarker.of((view, widget) => {
      return widget instanceof ConflictWidget ? conflictGutterMarker : null
    })
  ]
}
