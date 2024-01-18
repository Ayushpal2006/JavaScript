const fs=require('fs');
function sum(n){
    let sum=0;

    for(var i=0;i<n;i++){
        sum+=i;
    }
    console.log(sum);
}

function FileisRead(err,fileContent){
    sum(fileContent)
}

fs.readFile("file.txt",'utf8',FileisRead);