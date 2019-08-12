import PropTypes from "prop-types";
import React from "react";
import "./FileZone.css";

const FileZone = ({ text, selectedText }) => (
  <div id="file-zone">
    <div id="file">
      <div
        contentEditable
        suppressContentEditableWarning
        onMouseUp={() => selectedText(window.getSelection().toString())}
        role="presentation"
      >
        {text}
      </div>
    </div>
  </div>
);

FileZone.propTypes = {
  text: PropTypes.string,
  selectedText: PropTypes.func
};

FileZone.defaultProps = {
  text: "",
  selectedText: () => {}
};

export default FileZone;
