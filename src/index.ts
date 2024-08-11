import {Extension} from "@codemirror/state"
import {theme, lineNumberWidget} from "./widgets.js"
import {conflicts} from "./conflicts.js"

export function gitConflicts(): Extension {
  return [
    conflicts,
    theme,
    lineNumberWidget
  ]
}
