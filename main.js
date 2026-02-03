"use strict" //essa linha serve para o navegador ser mais rigoroso

const botaoTrocarCor = document.getElementById("trocar-cor")

function trocarCor (){

    let cor = document.getElementById("cor").value 
    document.documentElement.style.setProperty("--cor-bg", cor)
    document.documentElement.style.setProperty("--cor-bg", cor)
}

botaoTrocarCor.addEventListener("click", trocarCor)