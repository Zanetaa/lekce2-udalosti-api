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
    document.querySelector('.elipsa').classList.add("vetsi-text");
}

//audiosoubor

function startAudio() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.play()
}

function pause() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.pause()
}

function loudZero() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.volume = 0
}

function loudZeroFive() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.volume = 0.5
}

function loudOne() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.volume = 1
}

function replay() {
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.currentTime = 0
}

//let zvuk;

//zvuk=document.querySelector("#zvuk");



