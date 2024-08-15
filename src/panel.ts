import {EditorView, ViewUpdate, showPanel, DecorationSet, Decoration} from "@codemirror/view"
import {EditorState} from "@codemirror/state"
import {conflicts, acceptAllConflicts, deleteAllConflicts,
        selectFirstConflict, selectLastConflict, selectNextConflict, selectPrevConflict} from "./conflicts"
import {ConflictWidget} from "./widgets"
import {conflictConfig} from "./config"
import elt from "crelt"

class ConflictPanel {
  dom: HTMLElement
  count: HTMLElement
  acceptBase: HTMLElement
  current: DecorationSet = Decoration.none

  constructor(view: EditorView) {
    let conf = view.state.facet(conflictConfig)
    this.count = elt("span")
    this.acceptBase = elt("span",
                          elt("button", {class: "cm-pseudo-link", onclick: () => acceptAllConflicts(view, "base"),
                                         role: "menuitem", tabindex: "-1"},
                              view.state.phrase(`Accept all ${conf.labels.base}`)),
                          " · ")
    this.dom = elt("div", {
      class: "cm-git-conflict-panel",
      role: "menubar",
      tabindex: "-1",
      onkeydown: (event: KeyboardEvent) => {
        if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
          let items = Array.from(this.dom.querySelectorAll("[role=menuitem]")) as HTMLElement[]
          let index = items.indexOf(this.dom.ownerDocument.activeElement as HTMLElement)
          if (index < 0) items[0].focus()
          else if (event.key == "ArrowLeft") items[index ? index - 1 : items.length - 1].focus()
          else items[index == items.length - 1 ? 0 : index + 1].focus()
          event.preventDefault()
        } else if (event.key == "Escape") {
          view.focus()
          event.preventDefault()
        }
      }
    }, elt("div",
           this.count,
           "   ",
           elt("button", {class: "cm-pseudo-link", onclick: () => acceptAllConflicts(view, "ours"),
                          role: "menuitem"},
               view.state.phrase(`Accept all ${conf.labels.ours}`)),
           " · ",
           this.acceptBase,
           elt("button", {class: "cm-pseudo-link", onclick: () => acceptAllConflicts(view, "theirs"),
                          role: "menuitem", tabindex: "-1"},
               view.state.phrase(`Accept all ${conf.labels.theirs}`)),
           " · ",
           elt("button", {class: "cm-git-delete-conflict", onclick: () => deleteAllConflicts(view),
               "aria-hidden": "true", tabindex: "-1"}, "×"),
           " ",
           elt("button", {class: "cm-pseudo-link", onclick: () => deleteAllConflicts(view),
                          role: "menuitem", tabindex: "-1"},
               view.state.phrase("Delete all"))),
       elt("div",
           elt("button", {class: "cm-text-button", onclick: () => selectFirstConflict(view),
                          role: "menuitem", tabindex: "-1",
                          "aria-description": view.state.phrase("Select first conflict")}, "⤒"),
           " ",
           elt("button", {class: "cm-text-button", onclick: () => selectPrevConflict(view),
                          role: "menuitem", tabindex: "-1",
                          "aria-description": view.state.phrase("Select previous conflict")}, "↑"),
           " ",
           elt("button", {class: "cm-text-button", onclick: () => selectNextConflict(view),
                          role: "menuitem", tabindex: "-1",
                          "aria-description": view.state.phrase("Select next conflict")}, "↓"),
           " ",
           elt("button", {class: "cm-text-button", onclick: () => selectLastConflict(view),
                          role: "menuitem", tabindex: "-1",
                          "aria-description": view.state.phrase("Select last conflict")}, "⤓")))
    this.updateFor(view.state)
  }

  updateFor(state: EditorState) {
    let current = state.field(conflicts)
    if (current == this.current) return
    this.current = current
    let count = current.size
    this.count.textContent = state.phrase(count == 1 ? "$ unresolved conflict" : "$ unresolved conflicts", count)
    let hasBase = false
    current.between(0, 1e9, (_from, _to, deco) => {
      if ((deco.spec.widget as ConflictWidget).conflict.base) hasBase = true
    })
    this.acceptBase.style.display = hasBase ? "" : "none"
  }

  update(update: ViewUpdate) {
    this.updateFor(update.state)
  }

  get top() { return true }

  static create(view: EditorView) { return new ConflictPanel(view) }
}


export const conflictPanel = showPanel.compute(
  [conflicts], state => state.field(conflicts).size ? ConflictPanel.create : null)
