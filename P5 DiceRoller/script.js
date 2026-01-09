function diceRoller() {
    const rollInp = Number(document.getElementById("rollInp").value);
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")
    const values = []
    const images = []

    for (let i = 0; i < rollInp; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        values.push(roll)
        images.push(`<img src="images/${roll}.png">`)
    }
    diceResult.textContent = values.join(", ")
    diceImages.innerHTML = images.join('')
}