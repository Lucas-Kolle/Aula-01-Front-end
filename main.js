"use strict" //essa linha serve para o navegador ser mais rigoroso

const botaoTrocarCor = document.getElementById("trocar-cor")

function trocarCor (){

    let cor = document.getElementById("cor").value 
    
    if(cor == "roxo"){
        const corRoxa = "purple"
        cor = corRoxa
        document.documentElement.style.setProperty("--cor-bg", cor)

    }else if(cor == "amarelo"){
        const corAmarela = "yellow"
        cor = corAmarela
        document.documentElement.style.setProperty("--cor-bg", cor)

    }else if(cor == "azul"){
        const corAzul = "blue"
        cor = corAzul
        document.documentElement.style.setProperty("--cor-bg", cor)

    }else if(cor == "laranja"){
        const corLaranja = "orange"
        cor = corLaranja
        document.documentElement.style.setProperty("--cor-bg", cor)
    }else{
        document.documentElement.style.setProperty("--cor-bg", cor)
    }
}

botaoTrocarCor.addEventListener("click", trocarCor)