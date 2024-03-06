const main = document.querySelector("main")
const aside = document.querySelector("aside")
let shoppingcart = document.querySelector("ul")
const visaSumma = document.querySelector("tot")
const nyckel = document.querySelector("input")
let totalSumma = 0;
let jsonLista;
let list = [];
function add (namn, pris){
    let produkt = {
        pris: pris ,
        namn: namn
    }
    list.push(produkt)
    console.log(list)
    listAdd();
}
function listAdd (){
    shoppingcart.innerHTML = ""
    for (let i=0; i<list.length; i++){
        let listElement = document.createElement("li")
        listElement.innerText = list[i].namn + ": "+ list[i].pris+"kr",
        shoppingcart.appendChild(listElement);
        totalSumma = totalSumma + list[i].pris;
        
    }
    let jsonLista = JSON.stringify(list);
}

let oddOrEven = true
function listDisplay(){
    if(aside.style.display == "none"){
        if(oddOrEven){
            listAdd();
            main.style.display = "none";
            aside.style.display = "grid";
            oddOrEven=false
        }
        else{
            main.style.display = "flex";
            aside.style.display = "none";
            oddOrEven=true
        }
    }
}
function saveToLocalStorage (){
    try {
        window.localStorage.setItem(nyckel.value, jsonLista);
    } catch (error) {
        alert("Error in localstorage, try entering a username")
    }
    
}