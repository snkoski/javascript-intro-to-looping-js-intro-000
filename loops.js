function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if (i === 1) {
      array[i].push("I am ${i} strange loop");
    } else {
    array[i].push("I am ${i} strange loops");
    }
  }
}