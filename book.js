const utils = require("./book-utils");

const createBook = (id, name) => {
  const book = { id, name };
  if (utils.validateBook(book)) return book;
  else return "Invalid book: it doesn't have an id";
};
module.exports = createBook;
