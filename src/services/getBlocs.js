export function getBlocs(str) {
  const blocs = [];
  let bloc = str.split("\n\n");

  for (let i = 0; i < bloc.length; i++) {
    if (bloc[i].trim() !== "") {
      blocs.push(bloc[i].trim());
    }
  }
  return blocs;
}

const text =
  "Fournir une documentation\n\n claire et des exemples de code pour\n esfiuhsiufhsdigfyqgfiyqgfiygiydgqfiqgdiyqfgqiudfgiqgdfiqudgfiudqg\n\n\n\n de votre bibliothèque.\n\nFournir un site d'exemple et un StoryBook pour \n\nprésenter les fonctionnalités de la bibliothèque.";

console.log(getBlocs(text));
