// tady je místo pro náš program

console.log('Ahoj, jsem nalinkovaný.');

function tucnePismo() {
    document.querySelector('.elipsa').style.fontWeight='bold';
}

function changeRed() {
    document.querySelector('.elipsa').classList.toggle("cerveny-text");
}