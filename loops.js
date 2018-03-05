function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    array.push(`I am ${i} striange loop${i === 0 ? '' : 's'}.`);
}