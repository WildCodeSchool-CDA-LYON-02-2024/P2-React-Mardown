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

  // Select each element from the Markdown array
  // Boucle sur parameter: array
  array.forEach((line) => {
    if (line.startsWith("#")) {
      let level = 0; // Attribute 1 to heading level
      // Check if level of # is between 0 and 6
      while (line[level] === "#") {
        level += 1;
      }
      if (level > 0 && level <= 6) {
        // Ex. return "<h1>" + markdown + "</h1>";
        let textContent = line.slice(level);
        newElement += `<h${level}>${textContent}</h${level}>`;
      } else {
        newElement = line;
      }
    }
  });
  return newElement;
  // return `<h${level}> ${value} </h${level}>`; // Ex. return "<h1>" + markdown + "</h1>";
}

const markdownToHtml = (markdown) => {
  let html = "";
  let arrayMarkdown = markdown.split("\n");

  html += createHeadings(arrayMarkdown);
  // return arrayMarkdown.join(""); // Retourner le tableau sous format de string

  return html;
};

const text = "##tatatatata totototo";

console.log(markdownToHtml("Test"));
console.log(markdownToHtml(text));
