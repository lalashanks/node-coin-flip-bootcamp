// MAKE OOP ASAP

const heads = document.querySelector(".heads")
const tails = document.querySelector(".tails")
const coin = document.querySelector('.coin')
let result = document.querySelector('.result')

heads.addEventListener('click', function flip (){
  result.innerHTML = ''
  coin.classList.add('flip')
  setTimeout(function(){ coin.classList.remove('flip') }, 1000);
  let random = Math.random()
  setTimeout(function(){
    if (random < .50) {
      result.innerHTML = ("Heads :-) Yay, you Won!")
    } else {
      result.innerHTML = ("Tails :-( Sorry, you lost!")
    }
  }, 1000);
})

tails.addEventListener('click', function flip() {
  result.innerHTML = ''
  coin.classList.add('flip')
  setTimeout(function(){ coin.classList.remove('flip') }, 1000);
  let random = Math.random()
  setTimeout(function(){
    if (random < .50) {
      result.innerHTML = ("Heads :-( Sorry, you lost!")
    } else {
      result.innerHTML = ("Tales :-) Yay, you Won!")
    }
  }, 1000);
})

/* coin that can Flip
button to bet heads
button to bet tails
user chooses a button & clicks
coin flips & randomize result
display result according to bet
*/
