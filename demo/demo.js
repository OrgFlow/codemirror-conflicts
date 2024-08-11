import {minimalSetup, EditorView} from "codemirror"
import {lineNumbers} from "@codemirror/view"
import {gitConflicts} from "../dist/index.js"
import {javascript} from "@codemirror/lang-javascript"

window.view = new EditorView({
  doc: `Michael James Anderson
Sarah Elizabeth Thompson
David Alexander Harris
<<<<<<< HEAD
Emily Louise Mitchell
||||||| 2c5a01026f3c364bc758809893d29f166aa5ae76
Emily Grace Mitchell
=======
Emily Jane Mitchell
>>>>>>> dev
Christopher Daniel Evans
Amanda Nicole Foster
Matthew Thomas Carter
Olivia Rose Bennett

<<<<<<< HEAD
new version with a very very veeeeeeeeeeeeeeery super looooooooooooooooooooooooong line in it .....
"of"
the
content
=======
diverging version with a very very veeeeeeeeeeeeeeery super looooooooooooooooooooooooong line in it .....
here
>>>>>>> dev

end
`,
  extensions: [
    gitConflicts(),
    minimalSetup,
    lineNumbers(),
    javascript(),
  ],
  parent: document.body
})
