import { Button } from "./Button.jsx";
import Config from "../config/index.jsx";

export function NavbarComponent({ markdown, setMarkdown }) {
  const handleButtonClick = (htmlAttributes) => {
    const newMarkdown = `[${htmlAttributes}](https://example.com/${htmlAttributes})`;
    setMarkdown(newMarkdown);
  };
  return (
    <>
      {Config.htmlElement.map((element) => (
        <Button
          key={element.id}
          label={element.htmlAttributes}
          onClick={() => handleButtonClick(element.htmlAttributes)}
        />
      ))}
    </>
  );
}
