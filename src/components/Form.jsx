import { useState } from "react";
import PropTypes from "prop-types";
import Config from "../config/index.jsx";

/**
 * This form is used for personalize specific theme
 */
export function Form({
  backgroundColor,
  textColor,
  linkColor,
  codeBackgroundColor,
  toggleTheme,
}) {
  const [backgroundColorState, setBackgroundColor] = useState(backgroundColor);
  const [textColorState, setTextColor] = useState(textColor);
  const [linkColorState, setLinkColor] = useState(linkColor);
  const [codeBackgroundColorState, setCodeBackgroundColor] =
    useState(codeBackgroundColor);
  const onChangeData = (e) => {
    e.preventDefault();
    toggleTheme({
      backgroundColor: backgroundColorState,
      textColor: textColorState,
      linkColor: linkColorState,
      codeBackgroundColor: codeBackgroundColorState,
    });
  };
  return (
    <form onSubmit={onChangeData}>
      <input
        type="text"
        name="backgroundColor"
        placeholder="backgroundColor"
        onChange={(e) => setBackgroundColor(e.target.value)}
      />
      <input
        type="text"
        name="textColor"
        placeholder="textColor"
        onChange={(e) => setTextColor(e.target.value)}
      />
      <input
        type="text"
        name="linkColor"
        placeholder="linkColor"
        onChange={(e) => setLinkColor(e.target.value)}
      />
      <input
        type="text"
        name="codeBackgroundColor"
        placeholder="codeBackgroundColor"
        onChange={(e) => setCodeBackgroundColor(e.target.value)}
      />
      <input type="submit" value="Valider" />
    </form>
  );
}

Form.propTypes = {
  /** Markdown background color */
  backgroundColor: PropTypes.string.isRequired,
  /** Markdown text color */
  textColor: PropTypes.string.isRequired,
  /** Color of links in Markdown */
  linkColor: PropTypes.string.isRequired,
  /** Code background color in Markdown */
  codeBackgroundColor: PropTypes.string.isRequired,
};

Form.defaultProps = {
  backgroundColor: Config.defaultTheme.backgroundColor,
  textColor: Config.defaultTheme.textColor,
  linkColor: Config.defaultTheme.linkColor,
  codeBackgroundColor: Config.defaultTheme.codeBackgroundColor,
};
