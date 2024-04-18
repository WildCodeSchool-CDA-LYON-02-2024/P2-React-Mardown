import { createHeadings, createParagraph } from "../modules/text.js";
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

export const runnerMarkdown = markdownContent => {
    let arrayElements = [];
    let element = {
        value: ''
    };
    let i = 0;
    let j = 0;
    if(!new RegExp(/\n/).test(markdownContent)) {
        while (i < markdownContent.length && new RegExp(/[*]|#|[0-9]|-|\s|[A-Za-z]/).test(markdownContent[i])) {
            if(new RegExp(/[*]|#|-|[0-9]/).test(markdownContent[i])) {
                j += 1;
                switch (markdownContent[i]) {
                    case '-':
                        element.type = 'unorderedList';
                        element.start = i + 2;
                        break;
                    case '#':
                        element.type = 'title';
                        element.start = i + 2;
                        break;
                    default:
                        break;
                }
            } else {
                if(new RegExp(/^[A-Za-z\s]/).test(markdownContent[i]) && i >= element.start) {
                    element.value += i !== 0 ? markdownContent[i] : '';
                    element.value.trimStart();
                    element.end = j > i ? j : markdownContent.length;
                }
            }
            i+= 1;
        }
        arrayElements.push(element);
        for (const arrayElementValue of arrayElements) {
            arrayElementValue.value.trimStart();
        }
        return arrayElements;
    } else {
        /** Cas saut de lignes
         * HERE...
         */
    }
};

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
