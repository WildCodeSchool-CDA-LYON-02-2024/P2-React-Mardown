import { useState } from "react";

export function useMarkdown() {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');

    return {
        markdown,
        setMarkdown,
        html,
        setHtml
    };
}