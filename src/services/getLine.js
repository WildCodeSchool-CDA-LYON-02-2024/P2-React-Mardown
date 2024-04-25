import { getBlocs } from "./getBlocs.js";

export function getLine(markdown) {
  const blocs = getBlocs(markdown);
  const lines = [];

  for (let i = 0; i < blocs.length; i++) {
    const blocLines = blocs[i].split("\n");

    for (let j = 0; j < blocLines.length; j++) {
      const line = blocLines[j].trim();

      if (line !== "") {
        lines.push(line);
      }
    }
  }

  return lines;
}
