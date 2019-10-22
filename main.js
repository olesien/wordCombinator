//DON'T REPEAT YOURSELF YOU PLEB

const word = document.querySelector ('#word')
const translate = document.querySelector ('#Translate')
const save = document.querySelector ('#save')
const Http = new XMLHttpRequest();
const url='https://random-word-api.herokuapp.com/word?key=UMVJHFQY&number=2';

word.addEventListener('click', function()
{

Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
//  console.log(Http.responseText)
//    jsonText = Http.responseText;

    
    let translatelist = JSON.parse(Http.responseText);
    words(translatelist);
Http.open("GET", "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191021T192454Z.c43817007eac43cd.9ac53323ffbcbf6aeb330f858abd1dd2b0f84b8c&text="+ translatelist +"&lang=en-sv");
Http.send();
Http.onreadystatechange = (e) => {
    var json = Http.responseText;
    obj = JSON.parse(json)

    console.log("Translated:" + obj.text)
    document.getElementById("Translated").innerHTML = "Translated: " + obj.text;
}
}


});

function words(lists) {

    console.log(lists[1]);
    console.log(lists[0]);
    document.getElementById("word1").innerHTML = "Word 2: " + lists[1];
    document.getElementById("word2").innerHTML = "Word 1: " +lists[0];
};

// save to file **** NOT WORKING ****

save.addEventListener('click', function(){
    var textToSave = Http.responseText;

    var hiddenElement = document.createElement('a');
    
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'myFile.txt';
    hiddenElement.click();


});