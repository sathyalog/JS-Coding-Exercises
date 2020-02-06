function Adder(x) {
    return function(y){
      return x + y
    }
}
  
const add5 = new Adder(5);
console.log(add5(2)); // 7
const add10 = new Adder(10);
console.log(add10(3)); //13

function main() {
    var privatefunction = function () {
        console.log('hello');
    }

    return {
        publicfunction : function () {
            privatefunction();
        }
    }
}

const myFunc = new main;
myFunc.publicfunction();//hello