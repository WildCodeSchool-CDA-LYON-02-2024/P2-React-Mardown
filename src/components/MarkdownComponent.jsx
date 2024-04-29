import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme.jsx";
import "../assets/markdown.component.css";
import markdownToHtml from "../services/markdownToHtml.js";

export function MarkdownComponent({ val, setMarkdown, setHtml, html }) {
  const { theme } = useTheme();
  useEffect(() => {
    setHtml(markdownToHtml(val));
    console.log(html);
  }, [val, html]);
  return (
    <textarea
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
      onChange={(e) => setMarkdown(e.target.value)}
      value={val}
    ></textarea>
  );
}
