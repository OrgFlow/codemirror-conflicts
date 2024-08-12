import {EditorState} from "@codemirror/state"
import {EditorView, WidgetType, GutterMarker, lineNumberWidgetMarker, gutterWidgetClass,
        ViewPlugin, ViewUpdate} from "@codemirror/view"
import {language, highlightingFor} from "@codemirror/language"
import {highlightTree} from "@lezer/highlight"
import {presentableDiff} from "@codemirror/merge"
import {Conflict, ConflictSide} from "./conflicts.js"
import {conflictConfig} from "./config.js"
import elt from "crelt"

export class ConflictWidget extends WidgetType {
  constructor(readonly conflict: Conflict) { super() }

  toDOM(view: EditorView) {
    let diff = presentableDiff(this.conflict.ours.text, this.conflict.theirs.text)
    let sides = [
      this.renderSide("ours", this.conflict.ours, diff.map(c => [c.fromA, c.toA]), view),
      ...this.conflict.base ? [this.renderSide("base", this.conflict.base, [], view)] : [],
      this.renderSide("theirs", this.conflict.theirs, diff.map(c => [c.fromB, c.toB]), view)
    ]
    return elt("div", {
      class: "cm-git-conflict",
      role: "menubar",
      "aria-description": view.state.phrase("Merge conflict"),
      tabindex: "-1",
      onkeydown: (event: KeyboardEvent) => this.keydown(event, view, sides),
    }, sides.map(s => s.dom))
  }

  renderSide(tag: "ours" | "base" | "theirs", side: ConflictSide, inserted: [number, number][], view: EditorView) {
    let conf = view.state.facet(conflictConfig)
    let dom = elt("div", {
      class: "cm-git-conflict-side cm-git-conflict-" + tag,
      role: "menuitem",
      tabindex: "-1",
      oncopy: copySide(side)
    }, elt("div", {class: "cm-git-conflict-top"},
           elt("strong", capitalize(conf.labels[tag])), " · ", maybeAbbrev(side.label), " · ",
           elt("button", {class: "cm-pseudo-link", onclick: acceptSide(side, view), tabindex: "-1"},
               view.state.phrase("Accept")), " · ",
           elt("button", {class: "cm-text-button", onclick: copySide(side), tabindex: "-1",
                          "aria-description": view.state.phrase("Copy")}, "⧉")),
       elt("div", {class: "cm-git-conflict-text", onscroll: syncScroll},
           highlightText(side.text, view.state, inserted)))
    return {dom, side}
  }

  keydown(event: KeyboardEvent, view: EditorView, sides: readonly {dom: HTMLElement, side: ConflictSide}[]) {
    let side = Math.max(0, sides.findIndex(s => s.dom == document.activeElement))
    if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
      if (event.key == "ArrowLeft") side = side ? side - 1 : sides.length - 1
      else side = side == sides.length - 1 ? 0 : side + 1
      let target = sides[side].dom
      target.focus()
      target.ownerDocument.getSelection()!.collapse(target, 0)
      event.preventDefault()
    } else if (event.key == "Enter") {
      acceptSide(sides[side].side, view)(event)
      event.preventDefault()
    } else if (event.key == "Backspace" || event.key == "Delete") {
      let block = widgetExtent(view, event.target as HTMLElement)
      view.dispatch({
        changes: {from: block.from, to: Math.min(view.state.doc.length, block.to + 1)},
        selection: {anchor: block.from},
        userEvent: "conflict.delete"
      })
      view.focus()
      event.preventDefault()
    } else if (event.key == "Escape" || event.key == "Tab" || event.key == "ArrowDown" || event.key == "ArrowUp") {
      let block = widgetExtent(view, event.target as HTMLElement)
      let up = event.key == "ArrowUp" || event.key == "Tab" && event.shiftKey
      view.dispatch({
        selection: {anchor: up ? Math.max(0, block.from - 1) : Math.min(view.state.doc.length, block.to + 1)},
        userEvent: "select",
        scrollIntoView: true
      })
      view.focus()
      event.preventDefault()
    }
  }
}

function maybeAbbrev(gitLabel: string) {
  return /^[\da-f]{40}$/.test(gitLabel) ? gitLabel.slice(33) : gitLabel
}

function widgetExtent(view: EditorView, dom: HTMLElement) {
  return view.lineBlockAt(view.posAtDOM(dom))
}

function acceptSide(side: ConflictSide, view: EditorView) {
  return (event: Event) => {
    let block = widgetExtent(view, event.target as HTMLElement)
    view.dispatch({
      changes: {from: block.from, to: block.to, insert: side.text},
      selection: {anchor: block.from},
      userEvent: "conflict.accept"
    })
    view.focus()
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

function capitalize(str: string) {
  let first = String.fromCodePoint(str.codePointAt(0)!)
  return first.toUpperCase() + str.slice(first.length)
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
    return elt("div", elt("button", {
      class: "cm-git-delete-conflict",
      tabindex: "-1",
      onclick: (event: MouseEvent) => {
        let top = (event.target as HTMLElement).getBoundingClientRect().top + 2
        let block = view.elementAtHeight(top - view.documentTop)
        view.dispatch({
          changes: {from: block.from, to: Math.min(view.state.doc.length, block.to + 1)},
          userEvent: "conflict.delete"
        })
      }
    }, "×"))
  }
}

export const lineNumberWidget = lineNumberWidgetMarker.of((view, widget) => {
  return widget instanceof ConflictWidget ? conflictGutterMarker : null
})

const gutterClassWidget = new class extends GutterMarker {
  elementClass = "cm-git-gutterColor"
}

export const gutterColor = gutterWidgetClass.of((_view, widget) => {
  return widget instanceof ConflictWidget ? gutterClassWidget : null
})

export const widthTracker = ViewPlugin.fromClass(class {
  width = -1

  constructor(readonly view: EditorView) {
    view.requestMeasure(this)
  }

  read() {
    return this.view.scrollDOM.clientWidth - this.view.contentDOM.offsetLeft
  }

  write(width: number) {
    if (Math.abs(width - this.width) > 1) {
      this.width = width
      this.view.dom.style.setProperty("--visible-line-width", width + "px")
    }
  }

  update(update: ViewUpdate) {
    if (update.geometryChanged) this.view.requestMeasure(this)
  }
})
