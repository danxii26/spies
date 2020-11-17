const createBook = require("../book");
const utils = require("../book-utils");

describe("Book", () => {
  const spy = jest.spyOn(utils, "validateBook");

  afterEach(() => {
    spy.mockClear();
  });

  it("calls the validateBook function", () => {
    createBook(1, "End Game hay End Nhau");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("calls the validateBook function second", () => {
    createBook(2, "End Game hay End Nhau");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
