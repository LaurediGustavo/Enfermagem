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