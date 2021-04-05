const getRandomElement = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");
  return arr[Math.floor(Math.random() * arr.length)];
};

function checkTheAuthor(arr, item) {
  const authorQuotes = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].person === item) {
      authorQuotes.push(arr[i]);
    }
  }
  return authorQuotes;
}

module.exports = {
  getRandomElement,
  checkTheAuthor,
};
