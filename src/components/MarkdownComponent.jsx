import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme.jsx";
import "../assets/markdown.component.css";
import { markdownToHtml } from "../services/markdownToHtml.js";

/**
 * Props not provided: markdown, setMarkdown, setHtml, html
 */
export function MarkdownComponent({ markdown, setMarkdown, setHtml, html }) {
  const { theme } = useTheme();

  /**
   * useEffect unused
   */
  useEffect(() => {
    setHtml(markdownToHtml(markdown));
  }, [markdown, setHtml]);

  useEffect(() => {}, [html]);

  return (
    <textarea
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
      onChange={(e) => setMarkdown(e.target.value)}
      value={markdown}
    ></textarea>
  );
}
