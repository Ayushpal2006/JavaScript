function A(){
return new Promise(function (resolve){

    setTimeout(resolve,1000);
})
}

A().then(function (){
    console.log("hello world");
},)