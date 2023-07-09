function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name,age, pronouns){
  var character = {
  name: name,
  age: age,
  pronouns: 'she/her'
  }
  return character
}

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
}
return book
}

function editBook(title) {
 return title.pageCount *= .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}