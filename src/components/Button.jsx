// import PropTypes from "prop-types";
import "../assets/button.css";
import { useState } from "react";
import markdownToHtml from "../services/markdownToHtml.js";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, markdownContent }) => {
  const [renderedHtml, setRenderedHtml] = useState("");

  const handleClick = () => {
    // Convert markdown to HTML when the button is clicked
    const html = markdownToHtml(markdownContent);
    setRenderedHtml(html);
  };

  return (
    <button type="button" className="buttons" onClick={handleClick}>
      {label}
    </button>
  );
};

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };
//
// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: "medium",
//   onClick: undefined,
// };
