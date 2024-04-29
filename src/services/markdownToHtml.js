import {
  createHeadings,
  createLink,
  createOrderedList,
  createParagraph,
  createUnorderedList,
} from "../modules/text.js";
import { getLine } from "./getLine.js";

export function markdownToHtml(markdown) {
  let html = "";
  const lines = getLine(markdown);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    switch (line.charAt(0)) {
      case "#":
        html += createHeadings([line]);
        break;
      case "*":
      case "-":
      case "+":
        var [liBlock, index] = createUnorderedList(lines, i);
        html += liBlock;
        i = index;
        break;
      case "[":
        html += createLink([line]);
        break;
      default:
        if (
          /^[0-9]+.\s/.test(line) &&
          line.charAt(0) === /^[0-9]+.\s/.exec(line)[0].charAt(0)
        ) {
          const [olBlock, olIndex] = createOrderedList(lines, i);
          html += olBlock;
          i = olIndex;
        } else {
          html += createParagraph([line]);
        }
        break;
    }
  }

  return html;
}
