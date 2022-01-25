var codificar = document.querySelector(".inputCodificar")
var descodificar = document.querySelector(".inputDescodificar")
var botao = document.querySelector("button")
var divBotao = document.querySelector(".botoes")
var select = document.querySelector(".seletor")
var mensagemACodificar = ""
var mensagemCodificada = ""
var valorDeslocamento = parseInt(caixaDeslocamento)
var divCodificada = document.querySelector(".mensagemCodificada")
var base64 = document.querySelector(".base")
var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var caixaDeslocamento = ""
var codCesar = []


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


function criptografar(){
    if (codificar.checked && select.value == "base64"){
        transformaBase64()
    } else if(descodificar.checked && select.value =="base64"){
        descodifica64()
    } else if(codificar.checked && select.value =="cifraDeCesar"){
        criptoCesar()
    } else if(descodificar.checked && select.value=="cifraDeCesar"){
        descriptoCesar()
    }
}

function criptoCesar(){
    caixaDeslocamento = document.querySelector(".chave").value
    var valorDeslocamento = parseInt(caixaDeslocamento)
    mensagemACodificar = document.querySelector(".mensagem").value
    for (var i = 0; i < mensagemACodificar.length; i++){
        for (var x = 0; x <alfabeto.length; x++){
            if(mensagemACodificar[i] == alfabeto[x]){
                codCesar[i] = alfabeto[(x + valorDeslocamento) % alfabeto.length]
                break
            } else{
                codCesar[i] = ' '
            }
        }
    }
    mensagemCodificada = codCesar.join("")
    divCodificada.innerHTML = mensagemCodificada
}

function descriptoCesar(){
    caixaDeslocamento = document.querySelector(".chave").value
    var valorDeslocamento = parseInt(caixaDeslocamento)
    mensagemACodificar = document.querySelector(".mensagem").value
    for (var i = 0; i < mensagemACodificar.length; i++){
        for (var x = 0; x <alfabeto.length; x++){
            if(x-valorDeslocamento >=0){
                if(mensagemACodificar[i] == alfabeto[x]){
                    codCesar[i] = alfabeto[(x - valorDeslocamento) % alfabeto.length]
                    break
                } else{
                codCesar[i] = ' '
            }
        } else if (x-valorDeslocamento < 0) {
            if(mensagemACodificar[i] == alfabeto[x]){
                codCesar[i] = alfabeto[(x - valorDeslocamento) + 26]
                break
            } else{
                codCesar[i] = ' '
            }} 
    }

    mensagemCodificada = codCesar.join("")
    divCodificada.innerHTML = mensagemCodificada
}}

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