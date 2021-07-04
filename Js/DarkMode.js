const check = document.querySelector('#check');
const dark = document.querySelectorAll('#Dark li a');

check.addEventListener('click', definirDarkMode);

function definirDarkMode() {
    if (check.checked) {
        for (var item of dark){
            var url = item.getAttribute('href');
            item.setAttribute('href', url + "?dark=1")
        }

        MudaCorDark();
    }
    else {
        for (var item of dark){
            var url = item.getAttribute('href');
            url = url.replace('?dark=1', '');
            item.setAttribute('href', url);
        }

        MudaCorWhite();
    }

    const body = document.querySelector('#body');
    const btn  = document.querySelector('#btn');
    const header = document.querySelector('#header');
    const drop = document.querySelector('#drop');
    const footer = document.querySelector('#footer');
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
    check.checked = true;
    definirDarkMode();
}
else {
    check.checked = false;
    definirDarkMode();
}

function MudaCorDark() {
    body.setAttribute('class', 'bodyBlack');
    btn.setAttribute('class', 'buttonBlack');
    header.setAttribute('class', 'headerBlack');
    drop.setAttribute('class', 'drop-Menu-Show drop-Menu-Show-black');
    footer.setAttribute('class', 'footerBlack');
}

function MudaCorWhite() {
    body.setAttribute('class', 'bodyWhite');
    btn.setAttribute('class', 'buttonWhite');
    header.setAttribute('class', 'headerWhite');
    drop.setAttribute('class', 'drop-Menu-Show drop-Menu-Show-white');
    footer.setAttribute('class', 'footerWhite');
}