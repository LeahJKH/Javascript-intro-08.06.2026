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

// forskjellige typer variabler ^

console.log(array[1]) // hente ut johanne fra array. arraay starter alltid på 0
console.log(obj.alder) // hvordan hente ut objecter



if (number === 12) {
 console.log("tallet ditt er 12")
} else if (number === 13) {

} else { // om over ikke er sann kjør dette
 console.log("Tallet ditt er ikke 12 eller 13");
}
// conditionals


function Start() {
    console.log("jeg er en funksjon");
} 

Start(); // en "call" for en funksjon for og kjøre koden

array.pop() // en array metode med kode for og fjerne siste verdi i et array

const section = document.querySelector("#mainCont") // hente et html element

section.innerHTML = "<p>HEI PÅ DEI</p>" // en metode for og endre html

for (let index = 0; index <= 200; index++) {
    console.log(index)
} // for loop som kjører 200 ganger før den går videre

while (number <= 14) {
    console.log(number)
number++
} // while loop. vær forsiktig med at while ikke kjører forf alltid dersom dette crasher browseren

// operatører 
// +, -, /, *, %, ++, --,
// +=, -=, /=, *=

console.log(13 % 2)


// en event listner funksjon. hvor html "caller" funksjonen
function consoleEvent() {
    console.log("Jeg har blitt klikket")
    const div = document.createElement("div")
    const p = document.createElement("p")
    const text = document.createTextNode("Tiger")
    
    p.append(text)
    div.appendChild(p)
    section.appendChild(div)
}


// en eventlistner fult i javascript
const btn = document.querySelector("#clickEvent")
const count = document.querySelector("#counter")
let counted = 0 // en variabel vi kan endre
btn.addEventListener("click", () => {
    console.log("jeg er den bedre knappen")
    counted++ // ++ er alltid +1 til variabelen
    count.textContent = counted // vil endre texten i count elementet
    
})

