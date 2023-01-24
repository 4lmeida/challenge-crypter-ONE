 const mensagem =  document.querySelector(".mensagem");
 const textArea = document.querySelector(".text-area");
 const notification = document.querySelector(".notification");
 const btnCopy = document.querySelector(".btn-copy")


function encriptar(stringEncriptada) {
   
    let matriz = [["e", "enter"],  ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matriz.length; i++) {
        if(stringEncriptada.includes(matriz[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return stringEncriptada;
}

function descriptar(stringDescriptada) {

    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++) {
        if(stringDescriptada.includes(matriz[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return stringDescriptada;
}

function handlerBtnDescriptarClick() {

    const text = descriptar(mensagem.value);

    textArea.value = text;

    mensagem.value = "";

    notification.style.display = "block";
    mensagem.style.backgroundImage = "url(/assets/imageBoneco.svg)";

}


function handlerBtnEncriptarClick() {

    const text = encriptar(textArea.value);

    mensagem.value = text;

    textArea.value = "";

    notification.style.display = "none";
    mensagem.style.backgroundImage = "none";

}



console.table();