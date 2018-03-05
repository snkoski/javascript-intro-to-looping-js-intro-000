function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    array.push(`I am ${i + 1} strange loop${i === 0 ? '' : 's'}.`);
    
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number--);
    //number--;
  }
  return 'done';
}