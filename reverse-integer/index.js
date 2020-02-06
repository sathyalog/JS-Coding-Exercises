const reverseNumber = (myNumber) => {
    return parseInt(myNumber.toString().split('').reverse().join('')) * Math.sign(myNumber)
}

console.log(reverseNumber(123));
console.log(reverseNumber(-123));
console.log(reverseNumber(200));


