function createLibrary(name, shelves) {
  var libraryName = {
    name: name,
    shelves: shelves = { fantasy:[], fiction:[], nonFiction: []}
  }
  return libraryName
}

function addBook(libraryName,book) {
  libraryName.shelves[book.genre].push(book)
}

function checkoutBook(libraryName, title, genre) {
  for (var i = 0; i < libraryName.shelves[genre].length; i++) {
    var book = libraryName.shelves[genre][i];
    if (book.title === title) {
      libraryName.shelves[genre].splice(i, 1);
      return `You have now checked out ${title} from the ${libraryName.name}.`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${libraryName.name}.`;
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};