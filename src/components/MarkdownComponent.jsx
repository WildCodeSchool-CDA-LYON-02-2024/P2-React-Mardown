import { useEffect } from "react";
import "../assets/markdown.component.css";
import { markdownToHtml } from "../services/markdownToHtml.js";

export function MarkdownComponent({ markdown, setMarkdown, setHtml, html }) {
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
