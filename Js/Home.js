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
    const barra = document.querySelector('#barra');
    barra.setAttribute('class', 'barraBlack');
}

function mudarCorWhite() {
    const barra = document.querySelector('#barra');
    barra.setAttribute('class', 'barraWhite');
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
}

if (screen.height < 550){
    var p = document.querySelectorAll(".text");
    //alert(p[0].value);
}
