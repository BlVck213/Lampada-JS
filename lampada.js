"use strict"

const lampada = document.getElementById("lampada")
let idInterval

/* function lampadaQuebrada() {
 return document.getElementById("lampada").src.indexOf("quebrada") !== -1
} */

const lampadaQuebrada = () => lampada.src.indexOf("quebrada") !== -1

/* function lampadaDesligada(){
    return lampada.src.includes("desligada")
} */

const lampadaDesligada = () => lampada.src.includes("desligada")

function ligarLampada(){
    if(!lampadaQuebrada()){
    lampada.src = "img/ligada.jpg"
    ligar.disabled = true
    desligar.disabled = false
    }
}

function desligarLampada(){
    if(!lampadaQuebrada()){ 
    lampada.src = "img/desligada.jpg"
    ligar.disabled = false
    desligar.disabled = true
    }
}

function quebrarLampada(){
    lampada.src = "img/quebrada.jpg"
    ligar.disabled = true
    desligar.disabled = true
    piscar.disabled = true
}

function trocarLampada(){
    if(lampadaDesligada()){
        ligarLampada()
    } else {
         desligarLampada()
    }
}

function piscarLampada(){
    const piscar = document.getElementById("piscar")
    if(piscar.textContent == "Piscar"){
        idInterval = setInterval(trocarLampada, 750)  
         piscar.textContent = "Parar"
    } else {
        clearInterval(idInterval)
        piscar.textContent = "Piscar"
    }
}


document.getElementById("ligar")
.addEventListener("click", ligarLampada)

document.getElementById("desligar")
.addEventListener("click", desligarLampada)

document.getElementById("lampada")
.addEventListener("dblclick", quebrarLampada)

document.getElementById("lampada")
.addEventListener("mouseover", ligarLampada)

document.getElementById("lampada")
.addEventListener("mouseleave", desligarLampada)

document.getElementById("piscar")
.addEventListener("click", piscarLampada)



/*const some = function (a, b){
    return a + b
}
const soma = (a, b) => {
    return a + b
}
const somar = (a, b) => a + b

const soma10 = function (a){
    return a + 10
}
const soma1O = (a) => a + 10 */