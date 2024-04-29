import {ListsLayouts} from "../layouts/ListsLayouts.jsx";

export function NavbarComponent({ markdownRef, markdown, setMarkdown }) {
    const handleChange = () => {
        console.log(markdown);
    }
    return(
        <>
            <ListsLayouts mdRef={markdownRef} markdown={markdown} setMarkdown={(e) => setMarkdown(e) }/>
        </>
    );
}