let boxes = document.querySelectorAll(".box");
let resetbut = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgcontain = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const winn = [[0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6]
            ];
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(box.innerText != "X" && box.innerText != "O"){
            if(turn0 === true){
                box.style.color = "#b0413e";
            }else{
                box.style.color = "#3AA6B9";
            }
        if(turn0==true){
            box.innerText = "X";
            turn0 = false;
        }else{
            box.innerText = "O";
            turn0 = true;
        }
        checkwinner();
    }
    });
});

const disablebox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontain.classList.remove("hide");
    disablebox();
}
        const checkwinner = () => {
            for(pattern of winn){
                let a = boxes[pattern[0]].innerText;
                let b = boxes[pattern[1]].innerText;
                let c = boxes[pattern[2]].innerText;
                if(a != "" && b!="" && c!=""){ 
                if(a === b && b === c) {
                    if(a==="X"){
                    console.log(`Player1 wins (${a})`);
                    showWinner("P1");
                    }else{
                    console.log(`Player2 wins (${a})`);  
                    showWinner("P2");  
                    }
                }


            }
            }
        };
resetbut.addEventListener("click",() =>{
    turn0 = true;
    for(let i = 0 ; i<9 ; i++){
            boxes[i].innerText = "";
    }
    msg.innerText = "Winner";
    msgcontain.classList.add("hide");
    enablebox();
});    

newbtn.addEventListener("click",() =>{
    turn0 = true;
    for(let i = 0 ; i<9 ; i++){
        boxes[i].innerText = "";
    }
    msg.innerText = "Winner";
    msgcontain.classList.add("hide");
    enablebox(); 
});
