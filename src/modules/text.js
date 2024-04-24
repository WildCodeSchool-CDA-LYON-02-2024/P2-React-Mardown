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

export function createUnorderedList(lines) {
  let newElement = "<ul>";

  let listLines = []; // pour stocker les lignes de la liste en cours

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (
      line.startsWith("- ") ||
      line.startsWith("* ") ||
      line.startsWith("+ ")
    ) {
      listLines.push(line);

      // Vérifie si la prochaine ligne n'est pas une liste ou si c'est la dernière ligne
      if (i === lines.length - 1 || lines[i + 1].charAt(0) !== line.charAt(0)) {
        // Crée la liste à partir des lignes accumulées
        newElement += createListItems(listLines);
        listLines = [];
      }
    }
  }

  newElement += "\n</ul>\n"; // Ajoute un retour à la ligne après la fermeture de la balise <ul>
  return newElement;
}

export function createOrderedList(lines) {
  let newElement = "<ol>";

  let listLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Vérifiez si la ligne commence par un chiffre suivi d'un point
    if (/^\d+\.\s/.test(line)) {
      if (listLines.length > 0) {
        // S'il y a des lignes dans listLines, créez la liste ordonnée avec les lignes accumulées
        newElement += createListItems(listLines);
        listLines = [];
      }
      // Ajoutez la ligne courante à listLines
      listLines.push(line);
    } else {
      // Si la ligne ne commence pas par un chiffre suivi d'un point et d'un espace,
      // ajoutez simplement la ligne telle quelle à la balise <ol>
      newElement += `<li>${line}</li>`;
    }

    // Vérifiez si la prochaine ligne n'est pas une liste ordonnée ou si c'est la dernière ligne
    if (i === lines.length - 1 || !/^\d+\.\s/.test(lines[i + 1])) {
      if (listLines.length > 0) {
        newElement += createListItems(listLines);
        listLines = [];
      }
    }
  }

  newElement += "\n</ol>\n";
  return newElement;
}

function createListItems(lines) {
  let listItems = "";

  for (let line of lines) {
    let listItemContent = line.trim();
    if (/^\d+\./.test(line)) {
      // Pour les listes ordonnées, retirez le chiffre et le point
      listItemContent = line.replace(/^\d+\./, "").trim();
    } else if (/^[-*+]\s/.test(line)) {
      // Pour les listes non ordonnées, retirez le tiret, l'astérisque ou le plus
      listItemContent = line.replace(/^[-*]\s/, "").trim();
    }
    // Ajoutez le contenu de l'élément de liste avec un retour à la ligne et une indentation
    if (listItems === "") {
      // Si c'est le premier élément de la liste, ajoutez un retour à la ligne avant
      listItems += `\n  <li>${listItemContent}</li>`;
    } else {
      // Sinon, ajoutez normalement
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
