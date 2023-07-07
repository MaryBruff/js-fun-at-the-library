function shelfBook(book, shelf) {
if (shelf.length < 3){
  return shelf.unshift(book)
}
}

// add books to scifi shelf

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};