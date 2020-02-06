const arr = [2,3,6,4,8,1];

//cloning an array

//ES6
const array1 = [...arr];
console.log(array1);

//ES5
const cloneArray = (arr) => {
  const newArray = [];
  for(let i =0; i<arr.length;i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}

const array2 = cloneArray(arr);
console.log(array2);

//Using slice
const array3 = arr.slice(0);
console.log(array3);