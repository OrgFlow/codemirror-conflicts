# CodeMirror Git Conflict Marker Extension

A CodeMirror extension that displays Git conflict markers (`<<<<<<<`
syntax) as side-by-side pieces of conflicting code, and provides an
interface for accepting, copying, and deleting the chunks, with a top
toolbar that shows information about remaining conflicts.

Install dependencies and build the library with `npm install`.

Rebuild with `npm run build` (or `npm run watch` for a watching
build). Run the demo with `npm run demo`.

## Interface

**`gitConflicts`**`(config?: {labels?: {ours: string, theirs: string, base: string}}): Extension`

Returns an editor extension that enables the conflict highlighting and
toolbar. Optionally pass in a configuration to provide labels to use for
conflict sides.

**`selectNextConflict`**`, `**`selectPrevConflict`**`, `**`selectFirstConflict`**`, `**`selectLastConflict`**`: Command`

Commands that move between the remaining conflicts. It is recommended
to bind keys to these for keyboard accessibility.
