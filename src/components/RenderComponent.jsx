// import Renderer from "../services/Renderer";
// import Parser from "../services/Parser";
// import { useState } from "react";
// import { parseMd } from "../services/ParseMd";

// export default function RenderComponent() {
//   const [mdContent, setMdContent] = useState("# test");

//   // Translate text to Markdown
//   const renderMd = (mdContent) => {
//     // Initialisation
//     const render = new Renderer();
//     const parser = new Parser({ render });
//     // Translation from raw text to md ?
//     const tokens = parseMd(mdContent); // # Heading 1
//     const elements = parser.parse(tokens);
//     console.log(elements);
//     // return elements
//   };

//   const handleTextChange = (e) => {
//     setMdContent(e.target.value);
//   };

//   return (
//     <>
//       <div>
//         <textarea value={mdContent} onChange={handleTextChange} />
//       </div>
//       <p>{ mdContent }</p>
//       <div>
//         { renderMd(mdContent) }
//       </div>
//     </>
//   );
// }
