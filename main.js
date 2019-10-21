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


function words(lists) {
    let word1 = lists[0];
    let word2 = lists[1];
    console.log(word1 + ' ' + word2);
    
    translation(word1, word2);
//    word1 = jsonReturn[0];
//    word2 = jsonReturn;
}

function translation(word1, word2) {
    
}

//Translate this to two variables, word1 and word2


//Translate the word to swedish
//let ord1 = '';
//let ord2 = '';

//combine the two

