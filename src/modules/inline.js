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
