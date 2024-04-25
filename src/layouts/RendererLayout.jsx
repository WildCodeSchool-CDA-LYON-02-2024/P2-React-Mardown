import { NavbarComponent } from "../components/NavbarComponent.jsx";
import { MarkdownComponent } from "../components/MarkdownComponent.jsx";
import '../assets/renderer.layout.css';
import {useMarkdown} from "../hooks/useMarkdown.jsx";

export function RendererLayout() {
    const { markdown, setMarkdown } = useMarkdown();
    return(
        <div className="containerLib">
            <div className="containerNavButtons">
                <NavbarComponent markdown={ markdown } setMarkdown={ (e) => setMarkdown(e)} />
            </div>
            <div className="containerMarkdownHtml">
                <div>
                    <MarkdownComponent setMarkdown={ (e) => setMarkdown(e) } value={ markdown } />
                </div>
                <div>test 2</div>
            </div>
        </div>
    );
}