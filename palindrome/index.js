// Method1 - using reverse()
const palindrome = (str) => {
    return str === str.split('').reverse().join('') ? true : false
}

const test1 = palindrome('level');
console.log(test1); // true
const test2 = palindrome('god');
console.log(test2); //false
const test3 = palindrome('madam');
console.log(test3)

//Method 2 - using every()
const palindrome1 = (str) => {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

const test4 = palindrome1('level');
console.log(test4)