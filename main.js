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
//    https://translate.yandex.net/api/v1.5/tr.json/translate
// ? key=<API key>
// & text=<text to translate>
// & lang=<translation direction>
// & [format=<text format>]
// & [options=<translation options>]
// & [callback=<name of the callback function>]
// OUR KEY: trnsl.1.1.20191021T192454Z.c43817007eac43cd.9ac53323ffbcbf6aeb330f858abd1dd2b0f84b8c
// MY EXAMPLE: https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191021T192454Z.c43817007eac43cd.9ac53323ffbcbf6aeb330f858abd1dd2b0f84b8c&text=hello&lang=en-sv

}

//let ord1 = '';
//let ord2 = '';

//combine the two

