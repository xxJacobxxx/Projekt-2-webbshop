const main = document.querySelector("main")
const aside = document.querySelector("aside")
let shoppingcart = document.querySelector("ul")
let totalSumma = 0;
let list = [];
function add (namn, pris){
    let produkt = {
        pris: pris ,
        namn: namn
    }
    list.push(produkt)
    console.log(list)
}
function listAdd (){
    shoppingcart.innerHTML = ""
    for (let i=0; i<list.length; i++){
        let listElement = document.createElement("li")
        listElement.innerText = list[i].namn + ": "+ list[i].pris+"kr",
        shoppingcart.appendChild(listElement);
        totalSumma = totalSumma + list[i].pris;
    }
}
let oddOrEven = true
function listDisplay(){
    
    if(oddOrEven){
        listAdd();
        main.style.display = "none";
        aside.style.display = "flex";
        oddOrEven=false
    }
    else{
        main.style.display = "block";
        aside.style.display = "none";
        oddOrEven=true
    }
}