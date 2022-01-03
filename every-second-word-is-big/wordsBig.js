function wordsBig() {


}

let text = "Raz dwa trzy cztery pięć";
let numberOfSapces = 0;
let numberOfWords = numberOfSapces = 1;
const indexOfSpaces = [];
const words = [];

for (let i = 0; i < text.length; i++) {
  if(text[i] === ' ') {
    numberOfSapces++;
    indexOfSpaces.push = i;
  }
}

for(let i = 0; i < numberOfWords; i++){
  words.push(text.slice(0, indexOfSpaces[0]))
}



