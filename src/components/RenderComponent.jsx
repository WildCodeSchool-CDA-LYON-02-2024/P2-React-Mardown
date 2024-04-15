import Renderer from "../services/Renderer";
import Parser from "../services/Parser";
import { useState } from "react";

export default function RenderComponent(){
    const [mdContent, setMdContent]= useState('');

    const renderMd = (mdContent) => {

        const render = new Renderer();
        const parser = new Parser({render});
        const tokens = parseMd(mdContent);
        const elements = parser.parse(tokens)
    }
}