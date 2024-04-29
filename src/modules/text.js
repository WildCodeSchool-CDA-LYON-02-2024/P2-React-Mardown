export function createHeadings(lines) {
  let newElement = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let level = 0;

    while (line[level] === "#") {
      level++;
    }

    if (level > 0 && level <= 6) {
      const textContent = line.slice(level).trim();
      newElement += `<h${level}>${textContent}</h${level}>\n`;
    }
  }
  return newElement;
}

export function createLink(lines) {
  return lines.map((line) => {
    const regexMatchLink = line.match(/\[(.*?)\]\((.*?)\)/);
    if (regexMatchLink) {
      const linkText = regexMatchLink[1];
      const url = regexMatchLink[2];
      return `<a href="${url}">${linkText}</a>`;
    } else return line;
  });
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
    if (i === lines.length - 1 || lines[i + 1].charAt(0) !== line.charAt(0)) {
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

  let listLines = [];
  let i = index;

  while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
    const line = lines[i].trim();
    listLines.push(line);

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
      listItemContent = line.replace(/^\d+\./, "").trim();
    } else if (/^[-*+]\s/.test(line)) {
      listItemContent = line.replace(/^[-*]\s/, "").trim();
    }
    if (listItems === "") {
      listItems += `\n  <li>${listItemContent}</li>`;
    } else {
      listItems += `\n  <li>${listItemContent}</li>`;
    }
  }

  return listItems;
}
