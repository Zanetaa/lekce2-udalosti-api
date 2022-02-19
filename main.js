// tady je místo pro náš program

console.log('Ahoj, jsem nalinkovaný.');

//tučné písmo

function tucnePismo() {
    document.querySelector('.elipsa').style.fontWeight='bold';
}

//červený po kliknutí

function changeRed() {
    document.querySelector('.elipsa').classList.toggle("cerveny-text");
}

//větší po kliknutí

function changeBald() {
    document.querySelector('.elipsa').classList.toggle("vetsi-text");
}

//audiosoubor

function startAudio() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.play()
}


//let zvuk;

//zvuk=document.querySelector("#zvuk");



