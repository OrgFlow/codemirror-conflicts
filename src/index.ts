import {Extension, Prec} from "@codemirror/state"
import {keymap} from "@codemirror/view"
import {theme} from "./theme.js"
import {lineNumberWidget, gutterColor, widthTracker} from "./widgets.js"
import {conflicts, moveDownToConflict, moveUpToConflict} from "./conflicts.js"
import {ConflictConfig, conflictConfig} from "./config.js"
import {conflictPanel} from "./panel.js"

export {selectNextConflict, selectPrevConflict, selectFirstConflict, selectLastConflict} from "./conflicts.js"
export {ConflictConfig} from "./config.js"

export function gitConflicts(config: ConflictConfig = {}): Extension {
  return [
    conflicts,
    theme,
    lineNumberWidget,
    gutterColor,
    conflictPanel,
    Prec.high(keymap.of([
      {key: "ArrowDown", run: moveDownToConflict},
      {key: "ArrowUp", run: moveUpToConflict}
    ])),
    widthTracker,
    conflictConfig.of(config)
  ]
}
