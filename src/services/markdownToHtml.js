import {
    createHeadings, createLink, createOrderedList,
    createParagraph, createUnorderedList,
} from "../modules/text.js";
import { getLine } from "./getLine.js";

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
 */

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
            case "+":
                var [liBlock, index] = createUnorderedList(lines, i);
                html += liBlock;
                i = index;
                break;
            case "[":
                html += createLink([line]);
                break;
            default:
                if (
                    /^[0-9]+.\s/.test(line) &&
                    line.charAt(0) === /^[0-9]+.\s/.exec(line)[0].charAt(0)
                ) {
                    const [olBlock, olIndex] = createOrderedList(lines, i);
                    html += olBlock;
                    i = olIndex;
                } else {
                    html += createParagraph([line]);
                }
                break;
        }
    }

    return html;
};

/**
 * TEST Links STARTS
 */
const link = "[Link text Here](https://link-url-here.org)"
const notLink = "[Link text Here] (https://link-url-here.org)"
console.log("link", markdownToHtml(link));
console.log("notLink", markdownToHtml(notLink));
/**
 * TEST Links ENDS
 */

const text =
    "###### tatatatata totototo\n\n* hksdgksdgfkhsdgfksdgfk\n* kffkdjglfdgjdfl\n* hkdsghdsgfhk\ntatatatata# totot\n\n1. hksdgksdgfkhsdgfksdgfk\n2. kffkdjglfdgjdfl\n3. hkdsghdsgfhk\ngdfgsdjhdfgjfdjh\n* gffdgfdgfdgfg\n* gffdgfdgfdgfg\n* gffdgfdgfdgfg\n* gffdgfdgfdgfg\n* gffdgfdgfdgfg\n* gffdgfdgfdgfg";

console.log(markdownToHtml(text));

export default markdownToHtml;
