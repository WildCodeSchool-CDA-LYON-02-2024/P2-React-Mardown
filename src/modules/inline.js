import { getLine } from "../services/getLine.js";

/**
 * markdownToHtml <--> parentBold(verification avant, verification après) <--> createBold
 * markdownToHtml -> createItalic
 * # fgeargraegrgragere
 * aergaergargae
 * garggragr **ragzgagae**
 * **garggragr ragzgagae**
 * (^**)
 * (**$)
 */
export function createBold(array) {
  let newElement = "";
  array.forEach((line) => {
    newElement += `<strong>${line}</strong>`;
  });
  return newElement;
}

export function createItalic(array) {
  let newElement = "";
  array.forEach((line) => {
    newElement += `<em>${line}</em>`;
  });
  return newElement;
}

export function createEmojis(array) {
  // let line = getLine(array);

  /* Tentative fetch
  const emojiUrl = "https://unicode.org/emoji/charts/full-emoji-list.html";
  fetch(emojiUrl)
    .then((response) => {
      // if ((!response.ok) throw new Error("Network response was not ok");
      // return response.json();
      console.log(response);
    })
    .catch((error) => console.error(error));
  // console.log(emojiUrl);
   */

  const emojiMap = {
    ":smile:": "&#128516;",
    ":heart:": "&#128147;", // heart ❤
  };

  for (const [emojiName, htmlEntity] of Object.entries(emojiMap)) {
    const regex = new RegExp(escapeRegExp(emojiName), "g");
    array = array.replace(regex, htmlEntity);
  }

  return array;
}

// Function to escape regular expression special characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// Example usage
const markdownText = "I'm feeling :smile: today! :heart:";
const htmlText = createEmojis(markdownText);
console.log(htmlText);

const mdEmojis = "Hello world! :blush:. Hello world!";

// console.log(createEmojis(mdEmojis));

// const sentence = `A ticket to 大阪 costs ¥2000 👌😚 U+1F61A.`;
// const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
// console.log(sentence.match(regexpEmojiPresentation)); // Output: Array ["👌"]


