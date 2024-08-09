import {EditorState, Text, StateField, Range, Extension} from "@codemirror/state"
import {EditorView, Decoration, DecorationSet, WidgetType} from "@codemirror/view"
import {language, highlightingFor} from "@codemirror/language"
import {Parser} from "@lezer/common"
import {highlightTree} from "@lezer/highlight"
import {presentableDiff, Change} from "@codemirror/merge"
import elt from "crelt"

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
      if (del.length) conflicts = conflicts.update({filter: from => del.indexOf(from) == -1})
      conflicts = conflicts.map(tr.changes)
    }
    return conflicts
  },
  provide: f => EditorView.decorations.from(f)
})

class ConflictSide {
  constructor(
    readonly text: string,
    readonly label: string,
  ) {}
}

class Conflict {
  constructor(
    readonly ours: ConflictSide,
    readonly theirs: ConflictSide,
    readonly base: ConflictSide | null
  ) {}
}

class ConflictWidget extends WidgetType {
  constructor(readonly conflict: Conflict) { super() }

  toDOM(view: EditorView) {
    let diff = presentableDiff(this.conflict.ours.text, this.conflict.theirs.text)
    return elt("div", {class: "cm-git-conflict"},
               this.renderSide("ours", this.conflict.ours, diff.map(c => [c.fromA, c.toA]), view),
               this.conflict.base ? this.renderSide("base", this.conflict.base, [], view) : [],
               this.renderSide("theirs", this.conflict.theirs, diff.map(c => [c.fromB, c.toB]), view))
  }

  renderSide(tag: string, side: ConflictSide, inserted: [number, number][], view: EditorView) {
    return elt("div", {class: "cm-git-conflict-side cm-git-conflict-" + tag},
               elt("div", {class: "cm-git-conflict-top"},
                   elt("strong", view.state.phrase(tag)), " · ", maybeAbbrev(side.label), " · ",
                   elt("button", {class: "cm-pseudo-link", onclick: acceptSide(side, view)}, view.state.phrase("Accept")),
                   " · ", elt("button", {class: "cm-text-button", onclick: copySide(side)}, "⧉")),
               elt("div", {class: "cm-git-conflict-text"}, highlightText(side.text, view.state, inserted)))
  }
}

function maybeAbbrev(gitLabel: string) {
  return gitLabel.length == 40 && /^[\da-f]+$/.test(gitLabel) ? gitLabel.slice(33) : gitLabel
}

function acceptSide(side: ConflictSide, view: EditorView) {
  return (event: MouseEvent) => {
    let pos = view.posAtDOM(event.target as HTMLElement), block = view.lineBlockAt(pos)
    view.dispatch({
      changes: {from: block.from, to: block.to, insert: side.text},
      userEvent: "conflict.accept"
    })
  }
}

function copySide(side: ConflictSide) {
  return () => {
    navigator.clipboard.writeText(side.text)
  }
}

function highlightText(text: string, state: EditorState, changes: readonly [number, number][]) {
  let changeI = 0, inside = false, elts: Node[] = []
  function add(from: number, to: number, cls: string) {
    for (let at = from; at < to;) {
      let nextStop = to, nodeCls = cls + (inside ? " cm-git-insertedText" : ""), flip = false
      if (changeI < changes.length) {
        let nextBound = Math.max(0, inside ? changes[changeI][1] : changes[changeI][0])
        if (nextBound <= nextStop) {
          nextStop = nextBound
          if (inside) changeI++
          flip = true
        }
      }
      if (nextStop > at) {
        let node = document.createTextNode(text.slice(at, nextStop))
        if (nodeCls) {
          let span = document.createElement("span")
          elts.push(span)
          span.className = nodeCls
          span.appendChild(node)
        } else {
          elts.push(node)
        }
      }
      at = nextStop
      if (flip) inside = !inside
    }
  }

  let lang = state.facet(language)
  if (lang) {
    let tree = lang.parser.parse(text), pos = 0
    highlightTree(tree, {style: tags => highlightingFor(state, tags)}, (from, to, cls) => {
      if (from > pos) add(pos, from, "")
      add(from, to, cls)
      pos = to
    })
    add(pos, text.length, "")
  } else {
    add(0, text.length, "")
  }
  return elts
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

const theme = EditorView.baseTheme({
  ".cm-git-conflict": {
    display: "flex",
    alignItems: "stretch",
    paddingTop: "6px"
  },
  ".cm-git-conflict-side": {
    flex: "1 1 0",
    width: 0,
    paddingLeft: "6px",
    display: "flex",
    flexDirection: "column"
  },
  ".cm-git-conflict-text": {
    whiteSpace: "pre",
    overflowY: "auto",
    flex: "1 0 auto"
  },
  ".cm-git-conflict-ours .cm-git-conflict-text": {
    backgroundColor: "#eaf2fd"
  },
  ".cm-git-conflict-base .cm-git-conflict-text": {
    backgroundColor: "#f4f4f4"
  },
  ".cm-git-conflict-theirs .cm-git-conflict-text": {
    backgroundColor: "#f8e9fc"
  },
  ".cm-git-conflict-ours .cm-git-insertedText": {
    backgroundColor: "#c8dffe"
  },
  ".cm-git-conflict-theirs .cm-git-insertedText": {
    backgroundColor: "#ecc7fa"
  },
  ".cm-git-conflict-top": {
    fontFamily: "sans-serif",
    fontSize: "10px",
    flex: "0 0",
  },
  ".cm-git-conflict-top::selection, .cm-git-conflict-top *::selection": {
    backgroundColor: "transparent"
  },
  ".cm-git-gutter": {
    backgroundColor: "#feecc4",
    color: "#d5b338" // FIXME
  },
  ".cm-pseudo-link, .cm-text-button": {
    background: "transparent",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    color: "#130e2c",
    margin: 0,
    padding: 0
  },
  ".cm-pseudo-link": {
    textDecoration: "underline"
  }
})

export function gitConflicts(): Extension {
  return [
    conflicts,
    theme
  ]
}
