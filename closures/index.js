function Adder(x) {
    return function(y){
      return x + y
    }
}
  
const add5 = new Adder(5);
console.log(add5(2));
const add10 = new Adder(10);
console.log(add10(3));