//DON'T REPEAT YOURSELF YOU PLEB
const word = document.querySelector('#word')
const translate = document.querySelector('#Translate')
const save = document.querySelector('#save')
const myList = document.querySelector('#myList')
const Http = new XMLHttpRequest();
const api = 'EI85ZMRP';
const url='https://random-word-api.herokuapp.com/word?key='+ api +'&number=2';

function name()
{
var input = document.getElementById("userInput");
alert(input);
}
function getapi() {
    Http.open("GET", 'https://random-word-api.herokuapp.com/key?');
    Http.onreadystatechange = (e) => {
        let apikey = Http.responseText
        console.log(apikey);
    }
};
function words(lists) {

    console.log(lists[1]);
    console.log(lists[0]);
    document.getElementById("word1").innerHTML = "Word 2: " + lists[1];
    document.getElementById("word2").innerHTML = "Word 1: " + lists[0];    
};

for (let i=1; i<20; i++) {
    setTimeout( function timer(){
        Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        let translatelist = JSON.parse(Http.responseText);

        words(translatelist);
        Http.open("GET", "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191021T192454Z.c43817007eac43cd.9ac53323ffbcbf6aeb330f858abd1dd2b0f84b8c&text=" + translatelist + "&lang=en-sv");
        Http.send();
        Http.onreadystatechange = (e) => {
            var json = Http.responseText;
            obj = JSON.parse(json)

            // log eng words.
            console.log("Translated:" + obj.text)
            document.getElementById("Translated").innerHTML = "Translated: " + obj.text;
            
 
        }
        // inner HTML REAULT 
        var node = document.createElement("LI");
            var textnode = document.createTextNode(obj.text);
            node.appendChild(textnode);
            document.getElementById("myList").appendChild(node);
            
    }
    }, i*700 );
}

