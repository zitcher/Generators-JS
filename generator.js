function generator(func) {
  function* genFunc (iter) {
    for(let i of iter) {
      	yield func(i)
    }
  }
  return genFunc
}
