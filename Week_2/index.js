const express = require('express')
const app = express()
const port = 3000

function CalculateSum(counter){
    let sum=0;
    for(let i=0;i<counter;i++){
        sum =sum+i;
    }

    return sum;
}

function handleRequest(req, res){
    let CalculatedSum=CalculateSum(100);
    console.log(CalculatedSum);
    let answer="This is the sum of first 100 number  : "+CalculatedSum;
    res.send(answer)
  }

app.get('/', handleRequest)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



