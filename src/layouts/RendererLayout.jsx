import { NavbarComponent } from "../components/NavbarComponent.jsx";
import { MarkdownComponent } from "../components/MarkdownComponent.jsx";
import '../assets/renderer.layout.css';
import { useMarkdown } from "../hooks/useMarkdown.jsx";
import parse from 'html-react-parser';

export function RendererLayout() {
    const { markdown, setMarkdown, setHtml, html } = useMarkdown();
    return(
        <div className="containerLib">
            <div className="containerNavButtons">
                <NavbarComponent markdown={ markdown } setMarkdown={ (e) => setMarkdown(e)} />
            </div>
            <div className="containerMarkdownHtml">
                <div>
                    <MarkdownComponent html={html} setMarkdown={ (e) => setMarkdown(e) } val={ markdown } setHtml={ (e) => setHtml(e) }/>
                </div>
                <div className='overflow'>
                    {
                        parse(html) }
                </div>
            </div>
        </div>
    );
}