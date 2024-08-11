import {EditorView, ViewUpdate, showPanel, DecorationSet, Decoration} from "@codemirror/view"
import {EditorState} from "@codemirror/state"
import {conflicts, acceptAllConflicts, deleteAllConflicts,
        selectFirstConflict, selectLastConflict, selectNextConflict, selectPrevConflict} from "./conflicts.js"
import {ConflictWidget} from "./widgets.js"
import elt from "crelt"

class ConflictPanel {
  dom: HTMLElement
  count: HTMLElement
  acceptBase: HTMLElement
  current: DecorationSet = Decoration.none

  constructor(view: EditorView) {
    this.count = elt("span")
    this.acceptBase = elt("span",
                          elt("button", {class: "cm-pseudo-link", onclick: () => acceptAllConflicts(view, "base")},
                              view.state.phrase("Accept all original")),
                          " · ")
    this.dom = elt("div", {class: "cm-git-conflict-panel"},
                   elt("div",
                       this.count,
                       "   ",
                       elt("button", {class: "cm-pseudo-link", onclick: () => acceptAllConflicts(view, "ours")},
                           view.state.phrase("Accept all ours")),
                       " · ",
                       this.acceptBase,
                       elt("button", {class: "cm-pseudo-link", onclick: () => acceptAllConflicts(view, "theirs")},
                           view.state.phrase("Accept all theirs")),
                       " · ",
                       elt("button", {class: "cm-git-delete-conflict", onclick: () => deleteAllConflicts(view)}, "×"),
                       " ",
                       elt("button", {class: "cm-pseudo-link", onclick: () => deleteAllConflicts(view)},
                           view.state.phrase("Delete all"))),
                   elt("div",
                       elt("button", {class: "cm-text-button", onclick: () => selectFirstConflict(view)}, "⤒"),
                       " ",
                       elt("button", {class: "cm-text-button", onclick: () => selectPrevConflict(view)}, "↑"),
                       " ",
                       elt("button", {class: "cm-text-button", onclick: () => selectNextConflict(view)}, "↓"),
                       " ",
                       elt("button", {class: "cm-text-button", onclick: () => selectLastConflict(view)}, "⤓")))
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
