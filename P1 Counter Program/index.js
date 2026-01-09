const decreaseButton = document.getElementById("decBtn")
const increaseButton = document.getElementById("incBtn")
const resetBtn = document.getElementById("resetBtn")
const countlabel = document.getElementById("disp")
let num = 0;

increaseButton.onclick = function () {
    num++
    countlabel.textContent = num
}

decreaseButton.onclick = function () {
    num--
    countlabel.textContent = num
}

resetBtn.onclick = function () {
    num = 0
    countlabel.textContent = num
}