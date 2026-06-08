const string = "hei hei";
const bool = true;
let number = 8;

const array = ["per", "johanne", "jovia"];
const obj = {
    navn: "per",
    alder: 47,
    kodespråk: ["html", "css", "js"]
};

let litteralstring = `hei jeg heter ${obj.navn}`;

console.log(array[1])
console.log(obj.alder
    
)

// if (number === 12) {
//  console.log("tallet ditt er 12")
// } else if (number === 13) {

// } else {
//  console.log("Tallet ditt er ikke 12 eller 13");
// }

function Start() {
    console.log("jeg er en funksjon");
}

// Start();

array.pop()

const section = document.querySelector("#mainCont")

section.innerHTML = "<p>HEI PÅ DEI</p>"

// for (let index = 0; index <= 200; index++) {
//     console.log(index)
// }

// while (number <= 14) {
//     console.log(number)
// number++
// }

// +, -, /, *, %, ++, --,
// +=, -=, /=, *=

console.log(13 % 2)



function consoleEvent() {
    console.log("Jeg har blitt klikket")
    const div = document.createElement("div")
    const p = document.createElement("p")
    const text = document.createTextNode("Tiger")
    
    p.append(text)
    div.appendChild(p)
    section.appendChild(div)
}

const btn = document.querySelector("#clickEvent")
const count = document.querySelector("#counter")
let counted = 0
btn.addEventListener("click", () => {
    console.log("jeg er den bedre knappen")
    counted++
    count.textContent = counted
    
})

