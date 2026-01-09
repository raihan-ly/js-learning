let toFar = document.getElementById("toFar");
let toCel = document.getElementById("toCel");
let submit = document.getElementById("submit");
let result = document.getElementById("result")



function convert() {
    let userInp = document.getElementById("userInp").value;
    userInp = Number(userInp);
    if (toFar.checked) {
        let temp = (userInp * 1.8) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toCel.checked) {
        let temp = (userInp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = `Select a unit`
    }
}