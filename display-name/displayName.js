

function displayName(name, whatDisplay) {
    

  if(typeof(name) === 'string' && typeof(whatDisplay) === 'string') {


  } else {
    return console.error('Invalid type of argument(s) !!!')
  } 
  
  if (indexOfFirstSpace !== 0){
    
  }
  for (let i = 0; i < name.length; i++) {
    if(indexOfFirstSpace >= 0){
      if (name[i] === ' ') {
        indexOfFirstSpace = -i;
        console.log(indexOfFirstSpace)
        continue;
      }
    } else {
      if(name[i] === ' ') {
        indexOfSecondSpace = i;
        console.log(indexOfSecondSpace);
      }
    }
  }

  if (whatDisplay === 'first name') {
    console.log(name.slice(0, index));
  } else if (whatDisplay === 'second name') {
    console.log(name.slice(index + 1));
  } else if(whatDisplay === 'last name') {
    console.log(name.slice(index + 1));
  }
}

displayName('Zenon Marek Raubuć', 'first name' );
displayName('Zenon Marek Raubuć', 'second name' );
displayName('Zenon Marek Raubuć', 'last name' );
