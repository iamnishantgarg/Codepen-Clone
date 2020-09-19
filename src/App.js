import React, { Fragment, useState, useEffect } from "react";
import Editor from "./components/Editor";
import useLocalStorage from "./hooks/useLocalStorage";
function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [javascript, setJavascript] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const tt = setTimeout(() => {
      setSrcDoc(`<html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${javascript}</script>
  <html>`);
    }, 1000);
    return () => clearTimeout(tt);
  }, [html, css, javascript]);
  return (
    <Fragment>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        ></iframe>
      </div>
    </Fragment>
  );
}

export default App;
