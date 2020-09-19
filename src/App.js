import React from "react";

function App() {
  return (
    <div className="pane top-pane">
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
