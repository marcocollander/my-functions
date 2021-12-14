function findSpaces(text) {
  for (let i = 0; i < text.length; i++) {
    console.log(`${i}.\t ${text[i]}`);
  }

  let indexOfFirstSpace = text.indexOf(" ", 0);
  indexOfFirstSpace++;
  console.log(`\n${indexOfFirstSpace}. ----> ${text[indexOfFirstSpace]}`);

  let indexOfSecondSpace = text.lastIndexOf(" ", text.length);
  console.log(`${indexOfSecondSpace}. ---> ${text[indexOfSecondSpace]}`);

  console.log(`\n\t` + text.slice(indexOfFirstSpace, indexOfSecondSpace));
}

findSpaces("Zenon Marek Raubuć");

console.log(findSpace("Zenon Marek Raubuć"));

function findSpace(text) {
  let indexOfFirstSpace = text.indexOf(" ", 0);
  let indexOfSecondSpace = text.lastIndexOf(" ", text.length);

  const indexis = [indexOfFirstSpace, indexOfSecondSpace];

  return indexis;
}

console.log(findSpace("Zenon Marek Raubuć"));
