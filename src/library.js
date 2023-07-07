function createLibrary(name, shelves) {
  var libraryName = {
    name: name,
    shelves: shelves = { fantasy:[], fiction:[], nonFiction: []}
  }
  return libraryName
}




module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook,
  // takeStock
};