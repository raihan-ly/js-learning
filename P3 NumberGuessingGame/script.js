const min = 1
const max = 100
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let running = true;

let userInp;

while (running) {
    userInp = window.prompt("Enter a number between 1-100");
    userInp = Number(userInp)
    if (isNaN(userInp)) {
        window.alert("Enter a Number")
    }
    else if (userInp > 100 || userInp < 1) {
        window.alert("Invalid Number, please try again")
    }
    else {
        attempts++;
        if (userInp < randomNum) {
            window.alert("Too Low, Try Again")
        }
        else if (userInp > randomNum) {
            window.alert("Too High, Try Again")
        }
        else {
            window.alert(`Congrats, The answer was ${randomNum}, it took you ${attempts} attempts`)
            running = false
        }
    }

}
