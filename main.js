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

