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
    const livro = document.querySelectorAll('.livro');

    for (var item of livro){
        item.setAttribute('class', 'livro livroDark');
    }
}

function mudarCorWhite() {
    const livro = document.querySelectorAll('.livro');

    for (var item of livro){
        item.setAttribute('class', 'livro livroWhite');
    }
}