/**
 * Create headings of website with markdown syntax
 */
export function createHeadings(lines) {
  let newElement = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let level = 0; // Réinitialiser le niveau de titre pour chaque ligne

    // Compter le nombre de signes '#' au début de la ligne pour déterminer le niveau de titre
    while (line[level] === "#") {
      level++;
    }

    if (level > 0 && level <= 6) {
      // Exclure les signes '#' et les espaces pour obtenir le texte du titre
      const textContent = line.slice(level).trim();
      // Créer la balise HTML en fonction du niveau de titre
      newElement += `<h${level}>${textContent}</h${level}>\n`;
    }
  }

  return newElement;
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

  // console.log("LINES", lines);
  let listLines = []; // pour stocker les lignes de la liste en cours
  let i = index;

  while (
    (lines[i].startsWith("- ") ||
      lines[i].startsWith("* ") ||
      lines[i].startsWith("+ ")) &&
    i < lines.length
  ) {
    const line = lines[i].trim();

    listLines.push(line);
    // vérif si prochaine ligne pas une liste ou si dernière ligne
    if (i === lines.length - 1 || lines[i + 1].charAt(0) !== line.charAt(0)) {
      // Crée liste à partir des lignes accumulées
      newElement += createListItems(listLines);
      listLines = [];
    }
    i++;
  }

  newElement += "\n</ul>\n"; // Ajoute un retour à la ligne après la fermeture de la balise <ul>
  return [newElement, i - 1];
}

export function createOrderedList(lines, index) {
  let newElement = "<ol>";
  let listLines = [];
  let i = index;
  
  // Utilisation d'une boucle while pour parcourir les lignes jusqu'à ce qu'une ligne non conforme soit rencontrée ou jusqu'à la fin des lignes
  while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
    const line = lines[i].trim();
    listLines.push(line); // Ajoute la ligne actuelle à la liste des lignes de la liste ordonnée

    // Vérifie si la prochaine ligne ne commence pas par le même chiffre suivi d'un point et d'un espace
    if (i === lines.length - 1 || (/^\d+\.\s/.test(lines[i + 1]))) {
      // Crée la liste ordonnée avec les lignes accumulées
      newElement += createListItems(listLines);
      listLines = []; // Réinitialise la liste des lignes accumulées
    }

    i++; // Incrémente l'index pour passer à la prochaine ligne
  }

  newElement += "\n</ol>"; // Ajoute la balise de fermeture </ol> après la fin de la liste ordonnée
  return [newElement, i - 1]; // Retourne l'élément HTML de la liste ordonnée et l'index de la dernière ligne traitée
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
