//Find top 2 scores from the employees object
const emp1 = {name:'sathya',score:85}
const emp2 = {name:'vakacharla',score:80}
const emp3 = {name:'narahari',score:81}
const emp4 = {name:'sudheer',score:66}
const emp5 = {name:'pradeep',score:97}

const employees = [emp1,emp2,emp3,emp4,emp5]

//using es6 for only highest scorer
let highestN = Math.max(...employees.map(emp => emp.score))



//find highest and second highest using javascript
function highest(employees) {
  let temp = [], desc = [];
  for(let i=0;i<employees.length;i++) {
    temp[i] = employees[i].score
  }
  temp.sort() //sorting asc
  desc = temp.reverse(); //making desc
  return {highest: Math.max(...temp), secondHighest: desc[1]};
}

highest(employees)