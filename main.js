"use strict" //essa linha serve para o navegador ser mais rigoroso

const botaoTrocarCor = document.getElementById("trocar-cor")

function trocarCor (){

    let cor = document.getElementById("cor").value 
    
    if(cor == "roxo"){
        const corRoxa = "purple"
        cor = corRoxa
        document.documentElement.style.setProperty("--cor-bg", cor)
    }else if(cor == "amarelo"){
        const corAmarela = "amarelo"
        cor = corAmarela
        document.documentElement.style.setProperty("--cor-bg", cor)
    }
}

botaoTrocarCor.addEventListener("click", trocarCor)