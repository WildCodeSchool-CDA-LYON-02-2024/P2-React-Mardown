import {
  createHeadings,
  createParagraph,
  createUnorderedList,
  createOrderedList,
} from "../modules/text.js";
import { getLine } from "./getLine.js";
// import { createBold, createItalic } from "../modules/inline.js";

/**
 * TODO:
 *  Créer une méthode qui écrira du HTML en fonction d'un texte rentré en MarkDown:
 *    - Elements:
 *      - Titre DONE !!!!!!!!!!!! ;D
 *      - Sous-titre (H2, H3, H4, H5, H6) DONE !!!!!!!!!!!! ;D
 *      - Texte -> Return <p> DONE !!!!!!!!!!!!! ;D
 *      - Texte en gras(** | __)
 *      - Liste à puces(*|-)
 *      - Liste numérotées(1..9)
 *      - Images
 *      - Liens !(https://localhost:4200/)[mon liens] => <a href="https://localhost:4200/">mon liens</a>
 *    - Fonctionnalité interne (BONUS):
 *      - Import / Export .md
 *      - Tableaux
 * STR Markdown:
 * --> Compter tous les éléments du markdown
 * --> Récupérer leurs positions + la position du futur élément
 * @param markdownContent
 * @returns {*[]}
 */

// export const runnerMarkdown = markdownContent => {
//     let arrayElements = [];
//     let element = {
//         value: ''
//     };
//     let i = 0;
//     let j = 0;
//     if(!new RegExp(/\n/).test(markdownContent)) {
//         while (i < markdownContent.length && new RegExp(/[*]|#|[0-9]|-|\s|[A-Za-z]/).test(markdownContent[i])) {
//             if(new RegExp(/[*]|#|-|[0-9]/).test(markdownContent[i])) {
//                 j += 1;
//                 switch (markdownContent[i]) {
//                     case '-':
//                         element.type = 'unorderedList';
//                         element.start = i + 2;
//                         break;
//                     case '#':
//                         element.type = 'title';
//                         element.start = i + 2;
//                         break;
//                     default:
//                         break;
//                 }
//             } else {
//                 if(new RegExp(/^[A-Za-z\s]/).test(markdownContent[i]) && i >= element.start) {
//                     element.value += i !== 0 ? markdownContent[i] : '';
//                     element.value.trimStart();
//                     element.end = j > i ? j : markdownContent.length;
//                 }
//             }
//             i+= 1;
//         }
//         arrayElements.push(element);
//         for (const arrayElementValue of arrayElements) {
//             arrayElementValue.value.trimStart();
//         }
//         return arrayElements;
//     } else {
//         /** Cas saut de lignes
//          * HERE...
//          */
//     }
// };

const markdownToHtml = (markdown) => {
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
        html += createUnorderedList(lines);
        // Met à jour indice pour sauter les lignes déjà traitées
        i += lines.length - 1;
        break;
      default:
        if (/^\d+\.\s/.test(line)) {
          html += createOrderedList(lines);
          i += lines.length - 1;
        } else {
          html += createParagraph([line]);
        }
        break;
    }
  }

  return html;
};

const titre = "###### tatatatata totototo";
const paragraphe = "tatatatata# totototo";
const list = "- hksdgksdgfkhsdgfksdgfk\n- kffkdjglfdgjdfl\n- hkdsghdsgfhk";
const ordredlist =
  "1. hksdgksdgfkhsdgfksdgfk\n2. kffkdjglfdgjdfl\n3. hkdsghdsgfhk";
  

console.log(markdownToHtml(titre));
console.log(markdownToHtml(paragraphe));
console.log(markdownToHtml(list));
console.log(markdownToHtml(ordredlist));

export default markdownToHtml;
