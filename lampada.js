"use strict"

const lampada = document.getElementById("lampada")

let idInterval

const lampadaQuebrada = () => lampada.src.indexOf("quebrada") !== -1

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
        piscar.style.backgroundColor = "#FF0000"
    } else {
        clearInterval(idInterval)
        piscar.textContent = "Piscar"
     piscar.style.backgroundColor = "#00FF00"
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
