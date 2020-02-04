const name='sathya';

//Method1 - Usage of inbuilt reverse function for Array. 
//So, we will convert string to an array then reverse it and later again convert array to string.

const reverse1 = (str) => {
    // const arr = str.split('');
    // arr.reverse();
    // const reversed = arr.join('');
    // console.log(reversed);
    return str.split('').reverse().join('');
};

const reverseName = reverse1(name);

console.log(reverseName);

//Method2 - reverse a string without reverse function

const reverse2 = (str) => {
    let reversed = '';
    for(char of str) {
        reversed = char + reversed;
    }
    return reversed
}

const reverseName2 = reverse2(name);
console.log(reverseName2);

//Method 3- reverse a string using reduce method

const reverse3 = (str) => {
    return str.split('').reduce((reversed,character)=> {
        return character + reversed
    })
}

const reverseName3 = reverse3(name);
console.log(reverseName3);