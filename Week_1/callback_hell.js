setTimeout(function medicine1(){
    console.log("Medicine 1 recived ....");
    setTimeout(function medicine2(){
        console.log("Medicine 2 recived ....")
        setTimeout(function medicine3(){
            console.log("Medicine 3 recived ....")}
            ,3000)
    
    },2000)
},1000)
