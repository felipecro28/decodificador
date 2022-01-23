var codificar = document.querySelector(".inputCodificar")
var descodificar = document.querySelector(".inputDescodificar")
var botao = document.querySelector("button")
var divBotao = document.querySelector(".botoes")
var select = document.querySelector(".seletor")


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
