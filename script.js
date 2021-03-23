let randomnumber = 0
let userGuess = 0
/* sets our variables to 0 */
document.getElementById('button').addEventListener('click', randomizer)
/* connects the button to the randomzier function */
function randomizer () {
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)
  /* converts the characters into actual numbers */
  randomnumber = Math.random() * 6 + 1
  /* this will generate a random number from 1-6 */
  randomnumber = parseInt(randomnumber)
  /* this also converts the random number generated into an actual numbeer */
  if (userGuess === randomnumber) {
    document.getElementById('answer').innerHTML = 'You Won! Refresh to play again!
    /* displays only if the guess was correct */
  }
}
