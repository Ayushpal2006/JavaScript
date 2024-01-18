var boxes=document.querySelectorAll(".box")
var reset=document.querySelector("#reset");
var new_game=document.querySelector("#new");
var msg=document.querySelector("#msg");
var msg_container=document.querySelector(".msg_container");
let ButtunClicked=0;


new_game.addEventListener("click",()=>{
    window.location.reload();
    EnableBox();
})

// reset.addEventListener("click",()=>{
//     boxes.forEach((box)=>{
//         box.innerHTML="";
//     });
// });

var turnO=true;
const Wining_Patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

boxes.forEach(function(box){
    box.addEventListener("click",function(){
        console.log("Button Clicked")
        ButtunClicked++;
        if(turnO===true){ // Turn of Player 1(o);
            box.innerHTML="O";
            turnO=false;
            box.style.color="red";
        }else{ // Turn of Player 2(X);
            box.innerHTML="X";
            turnO=true;
            box.style.color="black";

            
        }
        box.disabled=true;



        checkWinner();


    });


    reset.addEventListener("click",()=>{  //If Reset Was Clicked
        box.disabled=false;    
        box.innerHTML="";
        // window.location.reload();
    });
    
});




const checkWinner=()=>{
    for (var patterns of Wining_Patterns) {
        // console.log(patterns[0],patterns[1],patterns[2]);

        let Pos1Val_1=boxes[patterns[0]].innerHTML;
        let Pos1Val_2=boxes[patterns[1]].innerHTML;
        let Pos1Val_3=boxes[patterns[2]].innerHTML;

       if(Pos1Val_1 !="" && Pos1Val_2 !="" && Pos1Val_3 !=""){
        if(Pos1Val_1 ==Pos1Val_2 && Pos1Val_2==Pos1Val_3){
            console.log("winner ", Pos1Val_1);
            showWinner(Pos1Val_1);

        }if(ButtunClicked==9){
            console.log("Draw")
            msg.innerHTML="Match Draw ";
            msg_container.classList.remove("hide");
            disableBox();
        }    

        }
       }
        
    }



const showWinner=(winner)=>{
    msg.innerHTML=`congo ,Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableBox();
}

const disableBox=()=>{
    for (let box of boxes) {
        box.disabled=true;

    }
}
const EnableBox=()=>{
    for (let box of boxes) {
        box.disabled=false;

    }
}

