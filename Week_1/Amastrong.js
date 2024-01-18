let c=153;
let a=c.toString();
let b=a;
let sum=0;

for(let i=0;i<a.length;i++){
    sum=sum+a[i]*a[i]*a[i];
    console.log(`sum = ${sum}`);
    if(sum==b){
        console.log("this is amstrong number");
    }
    

}
