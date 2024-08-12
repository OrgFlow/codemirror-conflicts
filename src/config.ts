import {Facet, combineConfig} from "@codemirror/state"

export type ConflictConfig = {
  labels?: {ours: string, theirs: string, base: string}
}

export const conflictConfig = Facet.define<ConflictConfig, Required<ConflictConfig>>({
  combine(inputs) {
    return combineConfig(inputs, {labels: {ours: "ours", theirs: "theirs", base: "original"}})
  }
})
