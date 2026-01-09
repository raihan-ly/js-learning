const myBox = document.getElementById("box")

function randomDelay() {
    return (Math.floor(Math.random() * 7) + 1) * 1000;
}


function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

async function messages() {
    await wait(randomDelay())
    displayMessage("Initializing Hacking...")


    await wait(randomDelay())
    displayMessage("Reading your files...")

    await wait(randomDelay())
    displayMessage("Sending all passwords and personal files to server...")

    await wait(randomDelay())
    displayMessage("Cleaning up...")
}

function displayMessage(message) {
    let myH1 = document.createElement("h1")
    const blinkingMessage = message.replace("...", '<span class="blink">...</span>');
    myH1.innerHTML = blinkingMessage;
    myBox.appendChild(myH1)
}

messages()