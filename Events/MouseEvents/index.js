const btn = document.getElementById("btn")
const myBox = document.getElementById("myBox")

btn.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato"
    myBox.textContent = "OUCH! 🤕"
    console.log(event.target)
})

btn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow"
    myBox.textContent = "Don't do it 😬"
})

btn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen"
    myBox.textContent = "Click Me 😀"
})