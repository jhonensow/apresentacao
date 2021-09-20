import React, { useState } from "react";

export default function Events() {
  const [currentEvent, setCurrentEvent] = useState("---");

  function update(e) {
    setCurrentEvent(e.type);
  }

  return (
    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
      <textarea
        onKeyPress={update}
        onCopy={update}
        onCut={update}
        onPaste={update}
        onFocus={update}
        onBlur={update}
        onDoubleClick={update}
        onTouchStart={update}
        onTouchMove={update}
        onTouchEnd={update}
        cols="30"
        rows="10"
      />
      <h1>{currentEvent}</h1>
    </div>
  );
}
