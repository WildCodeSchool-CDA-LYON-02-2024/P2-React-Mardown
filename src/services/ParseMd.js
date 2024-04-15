import { verifyNullContent, runMarkdown } from "../modules";

export function parseMd(content = null) {
  let newStr = "";
  if (verifyNullContent(content)) {
    runMarkdown(content);
  }
  return newStr;
}
