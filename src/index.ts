import {Extension} from "@codemirror/state"
import {theme} from "./theme.js"
import {lineNumberWidget} from "./widgets.js"
import {conflicts} from "./conflicts.js"
import {conflictPanel} from "./panel.js"

export function gitConflicts(): Extension {
  return [
    conflicts,
    theme,
    lineNumberWidget,
    conflictPanel,
  ]
}
