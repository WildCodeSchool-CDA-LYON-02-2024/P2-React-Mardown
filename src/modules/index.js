/**
 * TODO:
 *  - Créer une méthode qui écrira du HTML en fonction d'un texte rentré en MarkDown:
 *    - Titre
 *    - Sous-titre (H2, H3, H4, H5, H6)
 *    - Liens
 *    - Texte
 *    - Liste à puces
 *    - Liste numérotées
 *    - Tableaux
 *    - Texte en gras
 *    - Images
 */

/**
 * Récursivité => #
 */
// function createHeadings(lvl, title) {

//
//   // IF # => h1 ; ## => h2, etc.
//   if (lvl < 1 || lvl > 6) {
//     return "";
//   }
//   return "#".repeat(lvl) + "" + title;
// }

function createHeadings(array) {
  let newElement = "";
  const arrayHeadings = [];
  array.forEach((line) => {
    if (line.trim().startsWith("#")) {
      let level = 0;
      // Check if number of # is between 0 and 6
      if(level < 0 && level <= 6) {
        while(line[level] === "#") {
          level += 1;
        }
        arrayHeadings.push({ level: level, value: line.slice(level) })
      } else {
        console.error("Bad increment for heading");
      }
    }
  });
  for (const heading of arrayHeadings) {
    newElement += `<h${heading.level}>${heading.value}</h${heading.level}>`;
  }
  return newElement;
  // return `<h${level}> ${value} </h${level}>`; // Ex. return "<h1>" + markdown + "</h1>";
}

const markdownToHtml = (markdown) => {
  let html = "";
  let arrayMarkdown = markdown.split(" ");
  html += createHeadings(arrayMarkdown);
  // return arrayMarkdown.join(""); // Retourner le tableau sous format de string
  return html;
};

const text = "#####tatatatata";

console.log(markdownToHtml("Test"));
console.log(markdownToHtml(text));
