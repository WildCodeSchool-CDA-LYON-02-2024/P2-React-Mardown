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

export function createParagraph(array) {
  let newElement = "";
  array.forEach((line) => {
    newElement += `<p>${line}</p>`;
  });
  return newElement;
}
