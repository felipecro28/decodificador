var codificar = document.querySelector(".inputCodificar")
var descodificar = document.querySelector(".inputDescodificar")
var botao = document.querySelector("button")
var divBotao = document.querySelector(".botoes")
var select = document.querySelector(".seletor")
var mensagemACodificar = ""
var mensagemCodificada = ""
var divCodificada = document.querySelector(".mensagemCodificada")
var base64 = document.querySelector(".base")


descodificar.addEventListener("change", function(){
    botao.innerText = 'Descodificar'
})

codificar.addEventListener("change", function(){
    botao.innerText = 'Codificar'
})

function yesnoCheck(that) {
    if (that.value == "base64") {
        document.querySelector(".chave").style.display = "none";
    } else{
        document.querySelector(".chave").style.display = "inline-block"
    }
}

function transformaBase64(){
    mensagemACodificar = document.querySelector(".mensagem").value;
    mensagemCodificada = btoa(mensagemACodificar)
    divCodificada.innerHTML = mensagemCodificada
    }

function descodifica64(){
    mensagemACodificar = document.querySelector(".mensagem").value;
    mensagemCodificada = atob(mensagemACodificar)
    divCodificada.innerHTML = mensagemCodificada
}
    
function criptografar(){
    if (codificar.checked && select.value == "base64"){
        transformaBase64()
    } else if(descodificar.checked && select.value =="base64"){
        descodifica64()
    }
}



