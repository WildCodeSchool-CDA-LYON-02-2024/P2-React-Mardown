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
const text =
  "Fournir une documentation\n\n claire et des exemples de code pour\nesfiuhsiufhsdigfyqgfiyqgfiygiydgqfiqgdiyqfgqiudfgiqgdfiqudgfiudqg\n\n\n\n de votre bibliothèque.\n\nFournir un site d'exemple et un StoryBook pourudyugqsduygqsuyfgsdyufguydfg\ndfsdfdsdfsfsfsdsf \n\nprésenter les fonctionnalités de la bibliothèque.";

// console.log(getLine(text));
