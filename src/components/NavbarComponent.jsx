import { Button } from "./Button.jsx";
import Config from "../config/index.jsx";

export function NavbarComponent({ markdown, setMarkdown }) {
  const handleChange = () => {
    console.log(markdown);
  };
  return (
    <>
      {Config.htmlElement.map((element) => (
        <Button
          key={element.id}
          label={element.htmlAttributes}
          onClick={() => handleChange()}
        />
      ))}
    </>
  );
}
