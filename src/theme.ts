import {EditorView} from "@codemirror/view"

export const theme = EditorView.baseTheme({
  ".cm-git-conflict": {
    display: "flex",
    alignItems: "stretch",
    maxWidth: "var(--visible-line-width)",
    padding: "6px 2px 3px 2px"
  },
  ".cm-git-conflict-side": {
    flex: "1 1 0",
    width: 0,
    padding: "0 2px 0 4px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "2px",
    "&:focus": {
      outline: "2px solid #99d"
    }
  },
  ".cm-git-conflict-text": {
    whiteSpace: "pre",
    overflowY: "auto",
    flex: "1 0 auto"
  },
  ".cm-git-conflict-ours .cm-git-conflict-text": {
    backgroundColor: "#eaf2fd"
  },
  ".cm-git-conflict-base .cm-git-conflict-text": {
    backgroundColor: "#f4f4f4"
  },
  ".cm-git-conflict-theirs .cm-git-conflict-text": {
    backgroundColor: "#f8e9fc"
  },
  ".cm-git-conflict-ours .cm-git-insertedText": {
    backgroundColor: "#c8dffe"
  },
  ".cm-git-conflict-theirs .cm-git-insertedText": {
    backgroundColor: "#ecc7fa"
  },
  ".cm-git-conflict-top": {
    fontFamily: "sans-serif",
    fontSize: "10px",
    flex: "0 0",
  },
  ".cm-git-conflict-top::selection, .cm-git-conflict-top *::selection": {
    backgroundColor: "transparent"
  },

  ".cm-git-gutterMarker": {
    borderTop: "20px solid transparent",
    padding: "0 !important",
    "& > div": {
      backgroundColor: "#feecc4",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      "& > div": {
        textAlign: "center"
      }
    }
  },

  ".cm-git-conflict-panel": {
    fontFamily: "sans-serif",
    fontSize: "12px",
    backgroundColor: "#feecc4",
    border: "1px solid #e0af47",
    padding: "6px 6px 6px 20px",
    display: "flex",
    justifyContent: "space-between"
  },

  ".cm-pseudo-link, .cm-text-button": {
    background: "transparent",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    color: "#3f40c0",
    margin: 0,
    padding: 0
  },
  ".cm-pseudo-link": {
    textDecoration: "underline"
  },
  ".cm-git-delete-conflict": {
    color: "white",
    backgroundColor: "#b74d4d",
    fontSize: "9px",
    lineHeight: "10px",
    border: "none",
    padding: "0 1px",
    cursor: "pointer",
    verticalAlign: "middle"
  }
})
