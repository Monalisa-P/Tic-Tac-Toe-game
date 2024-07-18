let boxes=document.querySelectorAll(".box");
let restart=document.querySelector(".reset");
let msgContainer=document.querySelector(".msg-container")
let a=document.querySelector(".justify")
let turnO=false;
let count=0;
let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO == true){
            box.innerHTML="O";
            console.log(box);
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        winner();
        
    });
});
const showwinner=(winner)=>{
    msgContainer.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const winner=()=>{
    for (let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;

        if (pos1 !="" && pos2!="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3){
                showwinner(pos1);
                for (let i=0;i<=9;i++){
                    boxes[i].disabled=true;
                }
            }
            else{
                if (count==9){
                    alert("The game is draw")
                    msgContainer.innerText=`The game is draw`
                    break;
                }
                
            }
        }
    }
}



