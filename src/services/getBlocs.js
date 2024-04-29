export function getBlocs(markdown) {
  const blocs = [];
  const bloc = markdown.split("\n\n");

  // Get blocs from markdown
  for (let i = 0; i < bloc.length; i++) {
    if (bloc[i].trim() !== "") {
      blocs.push(bloc[i].trim());
    }
  }
  return blocs;
}
