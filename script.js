let boxes =document.querySelectorAll(".btn");
let resert = document.querySelector("#resstbtn");

let turn = true;
let winner = [
    [0 ,1 ,2],
    [0 ,3 ,6],
    [0 ,4 ,8],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [2 ,4 ,6],
    [3 ,4 ,5],
    [6 ,7 ,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        if(turn === true){
            box.innerText = "X";
            turn = false
        }
        else{
            box.innerText = "0";
            turn = true
        }
        box.disabled =true
        
        checkpattern();
    })
})
const checkpattern = ()=>{
    for (let pattern of winner) {
        let posi1val =boxes[pattern[0]].innerText
        let posi2val = boxes[pattern[1]].innerText
        let posi3val = boxes[pattern[2]].innerText

        if (posi1val != "" && posi2val != "" && posi3val != ""){
            if(posi1val === posi2val && posi2val === posi3val ){
                alert("Congratulation you are winner!!!")
            }
        }
    }
}