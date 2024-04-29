import { NavbarComponent } from "../components/NavbarComponent.jsx";
import { MarkdownComponent } from "../components/MarkdownComponent.jsx";
import '../assets/renderer.layout.css';
import { useMarkdown } from "../hooks/useMarkdown.jsx";
import parse from 'html-react-parser';
import { useRef } from "react";

export function RendererLayout() {
    const textInput = useRef();
    const { markdown, setMarkdown, setHtml, html } = useMarkdown();
    return(
        <div className="containerLib">
            <div className="containerNavButtons">
                <NavbarComponent markdownRef={textInput} markdown={ markdown } setMarkdown={ (e) => setMarkdown(e)} />
            </div>
            <div className="containerMarkdownHtml">
                <div>
                    <MarkdownComponent refTitle={textInput} html={html} setMarkdown={ (e) => setMarkdown(e) } val={ markdown } setHtml={ (e) => setHtml(e) }/>
                </div>
                <div className='overflow'>
                    {
                        parse(html) }
                </div>
            </div>
        </div>
    );
}