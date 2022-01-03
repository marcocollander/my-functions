let text = "Raz dwa trzy cztery pięć";

function wordsBig(text) {
  let numberOfSapces = 0;
  let numberOfWords = numberOfSapces + 1;
  const indexOfSpaces = [];
  const words = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      numberOfSapces++;
      indexOfSpaces.push = i;
    }
  }

  if (numberOfSapces === 0) {
    console.log(text.toUpperCase());
  }

  for (let i = 0; i < numberOfWords; i++) {
    if (i == 0) {
      words.push(text.slice(i, indexOfSpaces[i]))
    } else {
      words.push(slice(indexOfSpaces[i - 1] + i, indexOfSpaces[i]))
    }
  }

  console.log(words);
}

wordsBig(`Ala ma kota a kot ma Ale`);
wordsBig('Marco');









