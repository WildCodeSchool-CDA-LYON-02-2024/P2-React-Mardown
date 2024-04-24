import { getBlocs } from "./getBlocs.js";
function getLine(bloc) {
  let blocs = getBlocs();
  let line = blocs.split("\n");
  console.log(blocs);
  for (let i = 0; i < line.length; i++) {
    if (line[i].trim() !== "") {
      line.push(line[i].trim());
    }
  }
  return bloc;
}

console.log(getLine());
