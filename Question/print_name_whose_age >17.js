//print name whose age >17
const arr=[
  {firstname:'ayush', lastname:'pal',age:17},
  {firstname:'ksk', lastname:'chaudary',age:19},
  {firstname:'lakshit', lastname:'kumar',age:19},
  {firstname:'rahul', lastname:'patel',age:20}
];

let answer=arr.reduce((acc,crr)=>{
  
  if(crr.age>18){
    acc.push(crr.firstname);
  }

  return acc
},[])

console.log(answer);
