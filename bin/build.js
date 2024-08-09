import {build, watch} from "@marijn/buildtool"
import {resolve, join} from "node:path"

let root = resolve(import.meta.dirname, "..")
let options = {
  tsOptions: {
    lib: ["es2020", "scripthost", "dom"],
  }
}
let main = [resolve(root, "src", "index.ts")]

if (process.argv.includes("--watch")) watch(main, [], options)
else build(main, options)
