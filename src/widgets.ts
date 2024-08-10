import {EditorState} from "@codemirror/state"
import {EditorView, WidgetType, GutterMarker} from "@codemirror/view"
import {language, highlightingFor} from "@codemirror/language"
import {highlightTree} from "@lezer/highlight"
import {presentableDiff} from "@codemirror/merge"
import {Conflict, ConflictSide} from "./conflicts.js"
import elt from "crelt"

export class ConflictWidget extends WidgetType {
  constructor(readonly conflict: Conflict) { super() }

  toDOM(view: EditorView) {
    let diff = presentableDiff(this.conflict.ours.text, this.conflict.theirs.text)
    return elt("div", {class: "cm-git-conflict"},
               this.renderSide("ours", this.conflict.ours, diff.map(c => [c.fromA, c.toA]), view),
               this.conflict.base ? this.renderSide("base", this.conflict.base, [], view) : [],
               this.renderSide("theirs", this.conflict.theirs, diff.map(c => [c.fromB, c.toB]), view))
  }

  renderSide(tag: string, side: ConflictSide, inserted: [number, number][], view: EditorView) {
    let label = view.state.phrase(tag == "ours" ? "Ours" : tag == "base" ? "Original" : "Theirs")
    return elt("div", {class: "cm-git-conflict-side cm-git-conflict-" + tag},
               elt("div", {class: "cm-git-conflict-top"},
                   elt("strong", label), " · ", maybeAbbrev(side.label), " · ",
                   elt("button", {class: "cm-pseudo-link", onclick: acceptSide(side, view)}, view.state.phrase("Accept")),
                   " · ", elt("button", {class: "cm-text-button", onclick: copySide(side)}, "⧉")),
               elt("div", {class: "cm-git-conflict-text", onscroll: syncScroll},
                   highlightText(side.text, view.state, inserted)))
  }
}

function maybeAbbrev(gitLabel: string) {
  return /^[\da-f]{40}$/.test(gitLabel) ? gitLabel.slice(33) : gitLabel
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

function syncScroll(event: Event) {
  let target = event.target as HTMLElement
  let widget = target.parentNode!.parentNode! as HTMLElement
  for (let text of Array.from(widget.querySelectorAll(".cm-git-conflict-text")))
    if (text != target) text.scrollLeft = target.scrollLeft
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

export const conflictGutterMarker = new class extends GutterMarker {
  constructor() {
    super()
    this.elementClass = "cm-git-gutterMarker"
  }
  toDOM(view: EditorView) {
    return elt("div", elt("div", elt("button", {
      class: "cm-git-delete-conflict",
      onclick: (event: MouseEvent) => {
        let top = (event.target as HTMLElement).getBoundingClientRect().top + 2
        let block = view.elementAtHeight(top - view.documentTop)
        view.dispatch({
          changes: {from: block.from, to: Math.min(view.state.doc.length, block.to + 1)},
          userEvent: "conflict.delete"
        })
      }
    }, "×")))
  }
}

export const theme = EditorView.baseTheme({
  ".cm-git-conflict": {
    display: "flex",
    alignItems: "stretch",
    padding: "6px 0 3px 0"
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
  ".cm-git-gutterMarker": {
    borderTop: "20px solid transparent",
    padding: "0 !important",
    "& > div": {
      backgroundColor: "#feecc4",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      "& > div": {
        textAlign: "center"
      }
    },
    "& .cm-git-delete-conflict": {
      color: "white",
      backgroundColor: "#c55",
      fontSize: "8px",
      lineHeight: "10px",
      border: "none",
      padding: "1px 2px",
      cursor: "pointer"
    }
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
