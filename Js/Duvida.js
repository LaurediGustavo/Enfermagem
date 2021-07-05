//Pegar Valor na URL
function getValorUrl(valor) {
    var params = window.location.search.substr(1).split('&');

    for (var i = 0; i < params.length; i++) {
        var p = params[i].split('=');
        if (p[0] == valor) {
            return decodeURIComponent(p[1]);
        }
    }
    return false;
}

if (getValorUrl("dark")) {
    mudarCorBlack();
}
else {
    mudarCorWhite();
}

function mudarCorBlack() {
    const nome = document.querySelector('#Nome');
    const email = document.querySelector('#Email');
    const assunto = document.querySelector('#Assunto');
    const duvida = document.querySelector('#Duvida');
    
    nome.setAttribute('class', 'inputBlack');
    email.setAttribute('class', 'inputBlack');
    assunto.setAttribute('class', 'inputBlack');
    duvida.setAttribute('class', 'inputBlack');
}

function mudarCorWhite() {
    const nome = document.querySelector('#Nome');
    const email = document.querySelector('#Email');
    const assunto = document.querySelector('#Assunto');
    const duvida = document.querySelector('#Duvida');

    nome.setAttribute('class', 'inputWhite');
    email.setAttribute('class', 'inputWhite');
    assunto.setAttribute('class', 'inputWhite');
    duvida.setAttribute('class', 'inputWhite');
}