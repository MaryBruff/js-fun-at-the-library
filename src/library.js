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

function checkoutBook(library, title, genre) {
  var shelves = library.shelves[genre];
  var bookIndex = shelves.findIndex(function(book) {
    return book.title === title;
  });

  if (bookIndex !== -1) {
    shelves.splice(bookIndex, 1);
    return `You have now checked out ${title} from the ${library.name}.`;
  }

  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
}

function takeStock(libraryName, genre) {
  if (genre){
    return `There are a total of ${libraryName.shelves[genre].length} ${genre} books at the ${libraryName.name}.`
  } else {
    return `There are a total of ${Object.values(libraryName.shelves).length} books at the ${libraryName.name}.`
  }
  }

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};