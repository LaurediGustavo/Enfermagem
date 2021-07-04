mudarPorTamanho('');

function show(n) {

    var id = "celula" + n;
    var sp = "sp" + n;

    var div = document.getElementById(id).style.display;

    if (div == 'none'){
        document.getElementById(id).style.display = 'block';
        document.getElementById(sp).innerText = '-';
    }
    else {
        document.getElementById(id).style.display = 'none';
        document.getElementById(sp).innerText = '+';
    }

    //Serve para deixar o item selecionado
    //fixado no topo
    mudarPorTamanho(n);
}

function mudarPorTamanho(n) {
    if (screen.width < 768){
        var id = "lista" + n;

        if (document.querySelector('.container').clientHeight > screen.height - 100){
            document.getElementById('footer').style.position = 'relative';
        }
        else {
            document.getElementById('footer').style.position = 'absolute';
        }
    }
    else {
        if (document.querySelector('.container').clientHeight > screen.height - 240){
            document.getElementById('footer').style.position = 'relative';
        }
        else {
            document.getElementById('footer').style.position = 'absolute';
        }
    }
}


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
    const titulo = document.querySelectorAll('.titulo');
    const celula = document.querySelectorAll('.celula');

    for (var item of titulo){
        item.setAttribute('class', 'titulo corDivBlack');
    }
    for (var item of celula){
        item.setAttribute('class', 'celula celulaBlack');
    }
}

function mudarCorWhite() {
    const titulo = document.querySelectorAll('.titulo');
    const celula = document.querySelectorAll('.celula');

    for (var item of titulo){
        item.setAttribute('class', 'titulo corDivWhite');
    }
    for (var item of celula){
        item.setAttribute('class', 'celula celulaWhite');
    }
}