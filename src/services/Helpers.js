const htmlUnescapes = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

const reEscapedHtml = /&(?:amp|lt|gt|quot|#(?:0+)?39);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);

const unescape = (str = "") => {
  return reHasEscapedHtml.test(str)
    ? str.replace(reEscapedHtml, (entity) => htmlUnescapes[entity] || "'")
    : str;
};
const joinBase = (path, base) => {
  return !base ? path : path ? new URL(path, base).href : undefined;
  // if (!base) {
  //   return (!base) ? path : undefined;
  // }
  // return path ? new URL(path, base).href : undefined;
};

export { unescape, joinBase };
