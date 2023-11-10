let numeri = []
const numbers = function () {
    const tabelloneDiv = document.getElementById("tabellone");
    for (let i = 1; i <= 76; i++) {
        const numDiv = document.createElement("div");
        numDiv.classList.add("numDiv");
        const numValue = document.createElement("h3");
        numValue.innerText = i
        numDiv.appendChild(numValue)
        tabelloneDiv.appendChild(numDiv);
        numeri.push([])
    }
}
numbers();


document.getElementById("btn").addEventListener("click", fun);
function fun() {
    let randomNum = Math.floor((Math.random() * 76));
    document.getElementById("rng").innerText = "Numero: " + randomNum;
}
fun();

//tasformazione div in array per cambiare colore al div corrispondente al numero estratto


