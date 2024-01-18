const arr=[
  {firstname:'ayush', lastname:'pal',age:17},
  {firstname:'ksk', lastname:'chaudary',age:19},
  {firstname:'lakshit', lastname:'kumar',age:19},
  {firstname:'rahul', lastname:'patel',age:20}
];
// arr={19:2,17:1,20:1}
let answer=arr.reduce((acc,crr)=>{
  
  if(acc[crr.age]){
    acc[crr.age]=acc[crr.age]+1;
  }else{
    acc[crr.age]=1;
  }

  return acc
},{})

console.log(answer);
