import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme.jsx";
import { getLines } from "../services/getLine.js";
import { createHeadings } from "../modules/text.js";
import '../assets/markdown.component.css';

export function MarkdownComponent({value, setMarkdown}) {
    const {theme} = useTheme();
    useEffect(() => {
        console.log(createHeadings(getLines(value)));
    }, [value]);
    return (
        <textarea
            style={{backgroundColor: theme.backgroundColor, color: theme.textColor}}
            onChange={(e) => setMarkdown(e.target.value)}
            value={ value }
        ></textarea>
    )
}