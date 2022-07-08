import './style.css'

let state = {
  word: 'welcome',
  characters: [],
  maxMistakes: 3
}


function getMistakes () {
  let mistakes = state.characters.filter(char => !state.word.includes(char))
  return mistakes
}

function getMistakeCount () {
  let mistakes = getMistakes()
  return mistakes.length
}


function checkIfUserWon(): boolean {
}

function checkIfUserLost(): boolean {
}
