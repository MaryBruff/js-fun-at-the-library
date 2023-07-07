function shelfBook(book, shelf) {
if (shelf.length < 3){
  return shelf.unshift(book)
}
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      return shelf.splice(i, 1);
    }
  }
}


module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};