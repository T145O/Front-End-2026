const pokemon = document.getElementById("normar")
const comida = document.getElementById("berry")
const overlay = document.getElementById("bg-overlay");//Coisa do chat
const gnomo = document.getElementById("somgnomo");
const avatar = document.getElementById("Avatar");
const estados = {
    normal: "Normal.png",
    puto: "Bravo.png",
    morto: "Morto2.png",
    comendo: "Comendo.jpg",
    feliz: "Feliz.png",
}
const fundoDia = "fundo.jpg";
const fundoNoite = "fundoNoite.png";
let horas = 0;
let timeoutClick = 0;
let timeoutBack = 0;
let contador = 0;
let intervalo = null;
let time_click = null;
let time_out = null;

function controle() {
    if (intervalo) clearInterval(intervalo);
    intervalo = setInterval(() => {
        contador++;
        console.log("Tempo:", contador);
        if (contador == 30) {
            pokemon.src = estados.puto;
        }

        if (contador == 60) {
            pokemon.src = estados.morto;
        }
    }, 1000);

}
controle();

function alimentar() {
    contador = 0;
    console.log("Comendo");

    if (timeoutClick) clearTimeout(timeoutClick);

    timeoutClick = setTimeout(() => {
        pokemon.src = estados.feliz;

        timeoutBack = setTimeout(() => {
            pokemon.src = estados.normal;
        }, 2000);
    }, 1000)
}

const diaNoite = document.getElementById("troca")
function passarTempo() {
    if (horas == 1) {
        horas = 0;

        diaNoite.classList.remove("aumenta");
        diaNoite.classList.add("fade-out");
        setTimeout(() => {
            trocarFundo(fundoNoite);//Coisa do chat
            diaNoite.src = "Lua.png";
            diaNoite.classList.remove("fade-out");
            diaNoite.classList.add("aumenta");
        }, 500);

    } else {
        horas = 1;

        diaNoite.classList.remove("aumenta");
        diaNoite.classList.add("fade-out");
        setTimeout(() => {
            trocarFundo(fundoDia);//Coisa do chat
            diaNoite.src = "Sol.png";
            diaNoite.classList.remove("fade-out");
            diaNoite.classList.add("aumenta");
        }, 500);
    }
}
passarTempo();

function trocarFundo(novoFundo) {//Bruxaria
    overlay.style.backgroundImage = `url('${novoFundo}')`;
    overlay.style.opacity = 1;

    setTimeout(() => {
        document.body.style.backgroundImage = `url('${novoFundo}')`;
        overlay.style.opacity = 0;
    }, 500);
}

function criarPonto() {//Também é bruxaria
    const ponto = document.createElement("div");
    ponto.classList.add("ponto");
    const tamanho = Math.random() * 6 + 4;
    ponto.style.left = Math.random() * window.innerWidth + "px";
    ponto.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(ponto);
    setTimeout(() => {
        ponto.remove();
    }, 2000);
}

setInterval(() => {
    if (horas === 0) {
        if (Math.random() < 0.3) {
            criarPonto();
        }
    }
}, 500);

function tocagnomo() {
    gnomo.play();
    avatar.src="Gostosinho.jpeg";
    setTimeout(() => {
    avatar.src="avatar.png";
    }, 400);

}
