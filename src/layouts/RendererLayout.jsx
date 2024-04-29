import { NavbarComponent } from "../components/NavbarComponent.jsx";
import { MarkdownComponent } from "../components/MarkdownComponent.jsx";
import "../assets/renderer.layout.css";
import { useMarkdown } from "../hooks/useMarkdown.jsx";
import parse from "html-react-parser";

export function RendererLayout() {
  const { markdown, setMarkdown, html, setHtml } = useMarkdown();
  return (
    <div className="containerLib">
      <div className="containerNavButtons">
        <NavbarComponent markdown={markdown} setMarkdown={setMarkdown} />
      </div>
      <div className="containerMarkdownHtml">
        <div>
          <MarkdownComponent
            markdown={markdown}
            setMarkdown={setMarkdown}
            html={html}
            setHtml={setHtml}
          />
        </div>
        <div className="overflow">{parse(html)}</div>
      </div>
    </div>
  );
}
