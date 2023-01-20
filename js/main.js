document.querySelector(".btn-encriptar").addEventListener('click', handlerBtnEncriptarClick);
document.querySelector(".text-area").addEventListener('keyup', handlerTextAreaKeyUP);


let text;

function handlerTextAreaKeyUP(event) {
    text = event.target.value;
}

function handlerBtnEncriptarClick() {
    
    document.querySelector(".mensagem").innerHTML = text;


}


console.log(text);