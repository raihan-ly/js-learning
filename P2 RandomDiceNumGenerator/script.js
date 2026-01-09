const min = 1;
const max = 6;
document.getElementById("rollClick").onclick = function() {
    const result = Math.floor(Math.random() * (max-min+1)) + min;
    document.getElementById("resDisp").textContent = result
}