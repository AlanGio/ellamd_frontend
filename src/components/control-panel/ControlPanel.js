import React from "react";
import "./ControlPanel.css";

const textFormat = format => document.execCommand(format);

const textColor = color => document.execCommand("forecolor", false, color);

const textIndent = type => document.execCommand(type, true, null);

const ControlPanel = () => (
  <div id="control-panel">
    <div id="format-actions">
      <button
        className="format-action"
        type="button"
        onClick={() => textFormat("bold")}
      >
        <b>B</b>
      </button>
      <button
        className="format-action"
        type="button"
        onClick={() => textFormat("italic")}
      >
        <i>I</i>
      </button>
      <button
        className="format-action"
        type="button"
        onClick={() => textFormat("underline")}
      >
        <u>U</u>
      </button>
      &nbsp;
      <button
        className="format-action"
        type="button"
        onClick={() => textIndent("indent")}
      >
        ⇥
      </button>
      <button
        className="format-action"
        type="button"
        onClick={() => textIndent("outdent")}
      >
        ⇤
      </button>
      &nbsp;
      <button
        className="format-action-color red"
        type="button"
        onClick={() => textColor("red")}
      >
        &nbsp;
      </button>
      <button
        className="format-action-color green"
        type="button"
        onClick={() => textColor("green")}
      >
        &nbsp;
      </button>
      <button
        className="format-action-color blue"
        type="button"
        onClick={() => textColor("blue")}
      >
        &nbsp;
      </button>
      <button
        className="format-action-color yellow"
        type="button"
        onClick={() => textColor("yellow")}
      >
        &nbsp;
      </button>
    </div>
  </div>
);

export default ControlPanel;
