//DON'T REPEAT YOURSELF YOU PLEB

const word = document.querySelector ('#word')
const Http = new XMLHttpRequest();
const url='https://random-word-api.herokuapp.com/word?key=CNFJ959F&number=2';

word.addEventListener('click', function()
{

Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}


});

//Translate this to two variables, word1 and word2

let word1 = '';
let word2 = '';

//Translate the word to swedish
let ord1 = '';
let ord2 = '';

//combine the two

