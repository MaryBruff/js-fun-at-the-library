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

function calculatePageCount(title, pageCount) {
  title 
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}