import PropTypes from "prop-types";
import React from "react";
import "./SynonymsBox.css";

const SynonymsBox = ({ synonyms, selectedText, replaceSynonym }) => (
  <div id="synonyms-box">
    <h3>
      {synonyms && synonyms.loading && `Loading ${selectedText} Synonyms`}
    </h3>
    <h3>{!synonyms.loading && selectedText && `${selectedText} Synonyms`}</h3>
    <ul id="list">
      {synonyms &&
        !synonyms.loading &&
        synonyms.data.map(({ word, score }) => (
          <li key={`${score}_${word}`}>
            <button
              type="button"
              onClick={e => replaceSynonym(e.currentTarget.textContent)}
            >
              {word}
            </button>
          </li>
        ))}
    </ul>
  </div>
);

SynonymsBox.propTypes = {
  synonyms: PropTypes.shape({
    data: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool
  }),
  selectedText: PropTypes.string,
  replaceSynonym: PropTypes.func
};

SynonymsBox.defaultProps = {
  synonyms: {},
  selectedText: "",
  replaceSynonym: () => {}
};

export default SynonymsBox;
