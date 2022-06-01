//parametros auxiliares
const but = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const classDarkMode = 'dark-mode';

//checa botao
but.addEventListener('click', mudarModo);

//funcoes auxiliares
function mudarModo(){
    mudaClasses();
    mudaTextos();
}

function mudaClasses(){
    but.classList.toggle(classDarkMode);
    h1.classList.toggle(classDarkMode);
    body.classList.toggle(classDarkMode);
    footer.classList.toggle(classDarkMode);
}

function mudaTextos(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(classDarkMode)){
        but.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return
    }

    but.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}
