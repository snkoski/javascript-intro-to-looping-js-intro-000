function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    array.push(`I am ${i + 1} strange loop${i === 0 ? '' : 's'}.`);
    
}
console.log(array);
}