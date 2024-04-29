/**
 * Create headings of website with markdown syntax
 */
export function createHeadings(lines) {
  let newElement = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let level = 0; //reinitialise  niveau de titre pr chaque ligne

    // compte nbr de '#' au début de la ligne pr niveau titre
    while (line[level] === "#") {
      level++;
    }

    if (level > 0 && level <= 6) {
      // exclue  '#' etespaces pr obtenir le texte du titre
      const textContent = line.slice(level).trim();
      newElement += `<h${level}>${textContent}</h${level}>\n`;
    }
  }

  return newElement;
}

export function createLink(lines) {
  let link = "";

  lines.map((line) => {
    const regexMatchLink = line.match(/\[(.*?)\\]\((.*?)\)/);
    if (regexMatchLink) {
      const linkText = regexMatchLink[1];
      const url = regexMatchLink[2];
      link = `<a href="${url}">${linkText}</a>`;
    } else return (link = line);
  });
  return link;
}

export function createParagraph(lines) {
  let newElement = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newElement += `<p>${line}</p>\n`;
  }
  return newElement;
}

export function createUnorderedList(lines, index) {
  let newElement = "<ul>";
  console.log(index, "in UL");
  // console.log("LINES", lines);
  let listLines = [];
  let i = index;

  while (
    i < lines.length &&
    (lines[i].startsWith("- ") ||
      lines[i].startsWith("-") ||
      lines[i].startsWith("* ") ||
      lines[i].startsWith("+ "))
  ) {
    const line = lines[i].replace(/^[-*]\s/, "").trim();
    listLines.push(line);
    // vérif si prochaine ligne pas une liste ou si dernière ligne
    if (i === lines.length - 1 || lines[i + 1].charAt(0) !== line.charAt(0)) {
      // Crée liste à partir des lignes accumulées
      newElement += createListItems(listLines);
      listLines = [];
    }
    i++;
  }

  newElement += "\n</ul>\n";
  return [newElement, i - 1];
}

export function createOrderedList(lines, index) {
  let newElement = "<ol>";
  //console.log("LINES", lines);
  console.log(index, "in OL");

  let listLines = [];
  let i = index;

  //  parcours lignes jusqu'à  ligne non conforme rencontrée ou jusqu'à fin  lignes
  while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
    const line = lines[i].trim();
    listLines.push(line);

    // verif si  prochaine ligne commence pas par  même chiffre point et  espace
    if (i === lines.length - 1 || /^\d+\.\s/.test(lines[i])) {
      newElement += createListItems(listLines);
      listLines = [];
    }
    i++;
  }

  newElement += "\n</ol>\n";
  return [newElement, i - 1];
}

function createListItems(lines) {
  let listItems = "";

  for (let line of lines) {
    let listItemContent = line.trim();
    if (/^\d+\./.test(line)) {
      // retire chiffre et point <ol>
      listItemContent = line.replace(/^\d+\./, "").trim();
    } else if (/^[-*+]\s/.test(line)) {
      // retire le tiret astérisque ou plus <ul>
      listItemContent = line.replace(/^[-*]\s/, "").trim();
    }
    // ajt contenu de l'élément de liste avec retour à la ligne indentation
    if (listItems === "") {
      // si premier élément liste ajt retour à la ligne avant
      listItems += `\n  <li>${listItemContent}</li>`;
    } else {
      listItems += `\n  <li>${listItemContent}</li>`;
    }
  }

  return listItems;
}

// const text =
//   "## **Fournir une documentation**\n\n **claire et des exemples de code pour\nesfiuhsiufhsdigfyqgfiyqgfiygiydgqfiqgdiyqfgqiudfgiqgdfiqudgfiudqg\n\n\n\n #### de votre bibliothèque.\n\nFournir un site d'exemple et un StoryBook pourudyugqsduygqsuyfgsdyufguydfg\ndfsdfdsdfsfsfsdsf \n\nprésenter les fonctionnalités de la bibliothèque.";
// console.log(createHeadings(text));
// console.log("------------------------------");
// console.log(createParagraph(text));
//  console.log(createList(list));
