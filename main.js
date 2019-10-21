//DON'T REPEAT YOURSELF YOU PLEB

const word = document.querySelector ('#word')
const Http = new XMLHttpRequest();
const url='https://random-word-api.herokuapp.com/word?key=CNFJ959F&number=2';

word.addEventListener('click', function()
{

Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    let list = JSON.parse(Http.responseText);
    words(list);
    
}


});


function words(lists) {
    let word1 = lists[0];
    let word2 = lists[1];
    console.log(word1 + ' ' + word2);
    
    translation(word1, word2);
}

async function translation(word1, word2) {
//    https://translate.yandex.net/api/v1.5/tr.json/translate
// ? key=<API key>
// & text=<text to translate>
// & lang=<translation direction>
// & [format=<text format>]
// & [options=<translation options>]
// & [callback=<name of the callback function>]
// OUR KEY: trnsl.1.1.20191021T192454Z.c43817007eac43cd.9ac53323ffbcbf6aeb330f858abd1dd2b0f84b8c
// MY EXAMPLE: https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191021T192454Z.c43817007eac43cd.9ac53323ffbcbf6aeb330f858abd1dd2b0f84b8c&text=hello&lang=en-sv
//MISSION: create a function that takes word (word1 and word2) and creates a finished output in swedish
//    translate.addEventListener('click', function()
//{
//
//Http.open("GET", "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191021T192454Z.c43817007eac43cd.9ac53323ffbcbf6aeb330f858abd1dd2b0f84b8c&text=%22+ Http.responseText +"&lang=en-sv");
//Http.send();
//Http.onreadystatechange = (e) => {
//console.log(Http.responseText)
    
//const response = await fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191021T192454Z.c43817007eac43cd.9ac53323ffbcbf6aeb330f858abd1dd2b0f84b8c&text=hello&lang=en-sv');
//const myJson = await response.json();
//console.log(JSON.stringify(myJson));
    
//const myJson = await response.json();
//const objects = JSON.parse(myJson);
//console.log(objects.name);
}

