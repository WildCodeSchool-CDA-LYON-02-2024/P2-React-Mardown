import { createHeadings, createParagraph } from "../modules/text.js";

/**
 * TODO:
 *  Créer une méthode qui écrira du HTML en fonction d'un texte rentré en MarkDown:
 *    - Elements:
 *      - Titre DONE !!!!!!!!!!!! ;D
 *      - Sous-titre (H2, H3, H4, H5, H6) DONE !!!!!!!!!!!! ;D
 *      - Texte -> Return <p>
 *      - Texte en gras
 *      - Liste à puces
 *      - Liste numérotées
 *      - Images
 *      - Liens
 *    - Fonctionnalité interne (BONUS):
 *      - Import / Export .md
 *      - Tableaux
 */

const markdownToHtml = (markdown) => {
  let html = "";
  let arrayMarkdown = markdown.split("\n");
  switch (markdown.charAt(0)) {
    case '#':
      html += createHeadings(arrayMarkdown)
    break;
    default:
      html += createParagraph(arrayMarkdown);
    break;
  }
  // return arrayMarkdown.join(""); // Retourner le tableau sous format de string
  return html;
};

const titre = "######tatatatata totototo";
const paragraphe = "tatatatata# totototo";

console.log(markdownToHtml(titre));
console.log(markdownToHtml(paragraphe));

export default markdownToHtml;
