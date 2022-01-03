function wordsBig(text) {
  const indexOfSpaces = [];
  const words = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      indexOfSpaces.push(i);
    }
  }

  if (indexOfSpaces.length === 0) {
    return text.toUpperCase();
  }

  for (let i = 0; i < indexOfSpaces.length; i++) {
    if (i == 0) {
      words.push(text.slice(0, indexOfSpaces[i]))
    } else {
      words.push(text.slice(indexOfSpaces[i - 1], indexOfSpaces[i]));
    }
  }

  words.push(text.slice(indexOfSpaces[indexOfSpaces.length - 1]))

  for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) {
      words[i] = words[i].toUpperCase();
    }
  }

  return words.join('');

}

console.log(wordsBig('Marco'));
console.log(wordsBig(`Raz dwa trzy cztery pięć`));









