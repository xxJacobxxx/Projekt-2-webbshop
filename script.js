const main = document.querySelector("main")
const aside = document.querySelector("aside")
let shoppingcart = document.querySelector("ul")
const visaSumma = document.querySelector("#tot")
const bredd = window.screen.width;
let totalSumma = 0;
let jsonLista;
let jsonvärde;

let list = [];
function add (namn, pris){
    let produkt = {
        pris: pris ,
        namn: namn
    }
    list.push(produkt)
    console.log(list)
    listAdd();
    totRäkna();
}
function listAdd (){
    shoppingcart.innerHTML = "";
    totalSumma = 0;
    for (let i=0; i<list.length; i++){
        let listElement = document.createElement("li")
        listElement.innerText = list[i].namn + ": "+ list[i].pris+"kr";
        shoppingcart.appendChild(listElement);
        totalSumma += list[i].pris;
    }
    jsonLista = JSON.stringify(list);
    window.localStorage.setItem(123, jsonLista);
}
function taFram(){
    jsonvärde = window.localStorage.getItem(123);
    if(jsonvärde){
        list = JSON.parse(jsonvärde);
        listAdd();
    }
}
function totRäkna(){
    

    visaSumma.textContent = "Totalt: " + totalSumma.toFixed(2) + " kr";
}
let oddOrEven = true
function listDisplay(){
    if(bredd <=641){
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
    else{

    }
}
function rensa(){
    localStorage.clear();
    list = [];
    listAdd();
    totalSumma=0;
    totRäkna();
}
taFram();