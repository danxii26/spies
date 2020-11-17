const utils = {
  validateBook: function (book) {
    if (book.id && book.id > 0) return true;
    else return false;
  },
};
module.exports = utils;
