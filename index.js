// Your code here
function moveDodgerLeft(){
    let leftNumber = dodger.style.left.replace("px", "");
    let number = parseInt(leftNumber, 10);
    if (number > 0){
        dodger.style.left = `${number - 1}px`;
    }
}

function moveDodgerRight(){
    let rightNumber = dodger.style.left.replace("px", "");
    let number = parseInt(rightNumber, 10);
    if (number < 400){
        dodger.style.left = `${number + 1}px`
    }
}