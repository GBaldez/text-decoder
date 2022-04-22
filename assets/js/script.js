const btnDecode = document.getElementById("btn-decode");
const btnEncode = document.getElementById("btn-encode");
let input = document.getElementById("text");
const result = document.querySelector(".result");
const empty = document.querySelector(".initial");
const copy = document.querySelector(".copy");
const pattern = new RegExp("[A-Z!@#$%^&*()_+-=<>?/.,áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ]");

//Função para criptografar
const decode = (msg) => {
    //validação da mensagem
    if(!msg) return;
    if(pattern.test(msg)){
        alert("Não é possível criptografar uma mensagem com caracteres especiais, acentos ou letras maiúsculas!");
        return;
    }
    var msgDecoded = "";
    for(let i = 0; i < msg.length; i++){
        if(msg[i] === "a"){
            msgDecoded += "ai"
        } else if(msg[i] === "e"){
            msgDecoded += "enter"
        } else if(msg[i] === "i"){
            msgDecoded += "imes"
        } else if(msg[i] === "o"){
            msgDecoded += "ober"
        } else if(msg[i] === "u"){
            msgDecoded += "ufat"
        } else{
            msgDecoded += msg[i];
        }
    }
    showResponse(msgDecoded);
}
//função para mostrar a mensagem criptografada/descriptografada
const showResponse = (msg) => {
    empty.style.display = "none";
    result.innerHTML = msg;
    let haveBtn = document.querySelector(".btn-copy");
    const copyButton = document.createElement("button");
    copyButton.innerHTML = "Copiar";
    copyButton.classList.add("btn-copy");
    if(!haveBtn){
    copy.appendChild(copyButton);
    }
    copyButton.addEventListener("click", () => copyToClipboard(msg));
}
//Função para descriptografar
const encode = (msg) => {
    if(!msg) return;
    const replaces = /(?:ai|enter|imes|ober|ufat)/gi;
    let encodeMsg = (key) => {
    switch(key){
        case "ai":
            return "a";
        case "enter":
            return "e";
        case "imes":
            return "i";
        case "ober":
            return "o";
        case "ufat":
            return "u";
    }
}
showResponse(msg.replace(replaces, encodeMsg));
}
//Função para copiar a mensagem para o clipboard
const copyToClipboard = (text) => navigator.clipboard.writeText(text);   

//Para passar parâmetros para a função utilizando o addEventListener, é necessário utilizar uma função anônima
btnDecode.addEventListener("click",function() {
    decode(input.value);
});
btnEncode.addEventListener("click",function() {
    encode(input.value);
});
