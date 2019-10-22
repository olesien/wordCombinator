const word = document.querySelector('#word')
const translate = document.querySelector('#Translate')
const save = document.querySelector('#save')
const myList = document.querySelector('#myList')
const Http = new XMLHttpRequest();
const api = 'EI85ZMRP';
const url='https://random-word-api.herokuapp.com/word?key='+ api +'&number=2';

    //displays Eng words in separate lines
function words(lists) {
    console.log(lists[1]);
    console.log(lists[0]);
    document.getElementById("word1").innerHTML = "Word 2: " + lists[1];
    document.getElementById("word2").innerHTML = "Word 1: " + lists[0];    
};
    //loop it x times
for (let i = 1; i < 50; i++) {
    setTimeout( function timer(){
        //gets the english words
        Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        let translatelist = JSON.parse(Http.responseText);
        //traslates words
        words(translatelist);
        Http.open("GET", "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191021T192454Z.c43817007eac43cd.9ac53323ffbcbf6aeb330f858abd1dd2b0f84b8c&text=" + translatelist + "&lang=en-sv");
        Http.send();
        //parses the words
        Http.onreadystatechange = (e) => {
            var json = Http.responseText;
            obj = JSON.parse(json)
            //log Translated words to console
            console.log("Translated:" + obj.text)
            
        }
            // Creates a li and puts resault in it.
            var node = document.createElement("LI");
            var textnode = document.createTextNode(obj.text);
            node.appendChild(textnode);
            document.getElementById("myList").appendChild(node);
            
    }
    }, i*500 );
}

