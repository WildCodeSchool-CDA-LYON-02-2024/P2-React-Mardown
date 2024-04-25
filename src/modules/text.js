/**
 * Create headings of website with markdown syntax
 */
export function createHeadings(array) {
  let newElement = "";
  let level = 1; // Attribute 1 to heading level

  // Select each element from the Markdown array
  // Boucle sur parameter: array
  array.forEach((line) => {
    // Count how many # in the line
    while (line[level] === "#") {
      level += 1;
    }
    // If starts with '#' & Check if level of # is between 0 and 6
    if (level > 0 && level <= 6) {
      // Ex. return "<h1>" + markdown + "</h1>";
      let textContent = line.slice(level).trim();
      newElement += `<h${level}>${textContent}</h${level}>`;
    } else {
      newElement = line; // return line as is
    }
  });
  return newElement;
}

export function createLink(array) {
  array.map(line => {
    // const selectedLine = line;
    const matches = line.match(/\[(.*?)\]\((.*?)\)/);
    if (matches) {
      const linkText = matches[1];
      console.log("linkText", linkText);
      const url = matches[2];
      console.log("url", url);
      return `<a href="${url}">${linkText}</a>`;
    }
    }
  )
}

export function createParagraph(array) {
  let newElement = "";
  array.forEach((line) => {
    newElement += `<p>${ line }</p>`;
  });
  return newElement;
}
