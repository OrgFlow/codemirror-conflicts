import {Extension, Prec} from "@codemirror/state"
import {keymap} from "@codemirror/view"
import {theme} from "./theme"
import {lineNumberWidget, gutterColor, widthTracker} from "./widgets"
import {conflicts, moveDownToConflict, moveUpToConflict, moveLeftToConflict, moveRightToConflict} from "./conflicts"
import {type ConflictConfig, conflictConfig} from "./config"
import {conflictPanel} from "./panel"

export {selectNextConflict, selectPrevConflict, selectFirstConflict, selectLastConflict} from "./conflicts"
export {type ConflictConfig} from "./config"

export function gitConflicts(config: ConflictConfig = {}): Extension {
  return [
    conflicts,
    theme,
    lineNumberWidget,
    gutterColor,
    conflictPanel,
    Prec.high(keymap.of([
      {key: "ArrowDown", run: moveDownToConflict},
      {key: "ArrowUp", run: moveUpToConflict},
      {key: "ArrowRight", run: moveRightToConflict},
      {key: "ArrowLeft", run: moveLeftToConflict}
    ])),
    widthTracker,
    conflictConfig.of(config)
  ]
}
