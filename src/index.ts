import {Extension, Prec} from "@codemirror/state"
import {keymap} from "@codemirror/view"
import {theme} from "./theme.js"
import {lineNumberWidget} from "./widgets.js"
import {conflicts, moveDownToConflict, moveUpToConflict} from "./conflicts.js"
import {conflictPanel} from "./panel.js"

export function gitConflicts(): Extension {
  return [
    conflicts,
    theme,
    lineNumberWidget,
    conflictPanel,
    Prec.high(keymap.of([
      {key: "ArrowDown", run: moveDownToConflict},
      {key: "ArrowUp", run: moveUpToConflict}
    ]))
  ]
}
