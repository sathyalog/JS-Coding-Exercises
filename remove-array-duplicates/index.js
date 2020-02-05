const arrayval = [1,5,6,3,5,7,6,1,3,2,9];

const filtered = arrayval.filter((val,i) => i === arrayval.indexOf(val));

console.log(filtered)

const filtered1 = [...new Set(arrayval)];

console.log(filtered1);


function removeDups(arrayval) {
    let unique = {};
    arrayval.forEach(function(i) {
        debugger;
      if(!unique[i]) {
        debugger;
        unique[i] = true;
      }
    });
    return Object.keys(unique);
}
  
const filtered2 = removeDups(arrayval);

console.log(filtered2);