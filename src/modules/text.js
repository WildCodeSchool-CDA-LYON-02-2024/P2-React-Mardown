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

    // if (
    //   line.startsWith("- ") ||
    //   line.startsWith("* ") ||
    //   line.startsWith("+ ")
    // ) {
      console.log("AVANT",listLines);
      listLines.push(line);
      console.log("APRES",listLines);
      
      // vérif si prochaine ligne pas une liste ou si dernière ligne
      if (i === lines.length - 1 || lines[i + 1].charAt(0) !== line.charAt(0)) {
        // Crée liste à partir des lignes accumulées
        newElement += createListItems(listLines);
        // listLines = [];
        // }
      }
      console.log("APRESSSSSSSSSSSSS",listLines);
  }

  newElement += "\n</ul>"; // Ajoute un retour à la ligne après la fermeture de la balise <ul>
  return newElement;
}

export function createOrderedList(lines) {
  let newElement = "<ol>";

  let listLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // vérif si  ligne commence par un chiffre suivi d'un pointet espace
    if (/^\d+\.\s/.test(line)) {
      if (listLines.length > 0) {
        // Silignes dans listLines créez liste ordonnée avec les lignes accumulées
        newElement += createListItems(listLines);
        listLines = [];
      }
      // Ajoute la ligne courante à listLines
      listLines.push(line);
    } else {
      // Si ligne commence pas par un chiffre suivi d'un point et d'un espace,
      // ajoute  la ligne telle quelle à la balise <ol>
      newElement += `<li>${line}</li>`;
    }

    // vérif si prochaine ligne  pas liste ordonnée ou si  dernière ligne
    if (i === lines.length - 1 || !/^\d+\.\s/.test(lines[i + 1])) {
      if (listLines.length > 0) {
        newElement += createListItems(listLines);
        listLines = [];
      }
    }
  }

  newElement += "\n</ol>\n\n";
  return newElement;
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
      listItemContent = line.replace(/^[-*+]\s/, "").trim();
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
