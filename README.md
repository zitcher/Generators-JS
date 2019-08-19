# Generators-JS

Infinite Generators
```
function generator(func) {
  function* genFunc (iter) {
    for(let i of iter) {
      	yield func(i)
    }
  }
  return genFunc
}

function* fibonacci() {
  let fn1 = 0
  let fn2 = 1
  while (true) {  
    let current = fn1;
    fn1 = fn2;
    fn2 = current + fn1
    yield current
    if (current < 0) {
        return
    }
  }
}

let gen_sqrt = generator(Math.sqrt)
let fib_sqrt = gen_sqrt(fibonacci())

for (let i = 0; i < 100; i++) {
  console.log(fib_sqrt.next().value);
}
```
