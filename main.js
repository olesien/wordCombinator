//DON'T REPEAT YOURSELF YOU PLEB

const word = document.querySelector ('#word')
const Http = new XMLHttpRequest();
const url='https://random-word-api.herokuapp.com/word?key=CNFJ959F&number=2';


//let jsonText = '';
word.addEventListener('click', function()
{

Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
//  console.log(Http.responseText)
//    jsonText = Http.responseText;
    let list = JSON.parse(Http.responseText);
    words(list);
    
}


});

let word1 = '';
let word2 = '';

function words(lists) {
//    word1 = jsonReturn[0];
//    word2 = jsonReturn;
    console.log(lists[0]);
    console.log(lists[1]);
    document.getElementById("word1").innerHTML = lists[0];
    document.getElementById("word2").innerHTML = lists[1];
}

//Translate this to two variables, word1 and word2


//Translate the word to swedish
//let ord1 = '';
//let ord2 = '';

//combine the two

