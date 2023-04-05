const horasInput = document.getElementById('horas');
const minutosInput = document.getElementById('minutos');
const segundosInput = document.getElementById('segundos');
const temporizadorDiv = document.getElementById('temporizador');
let iniciar = document.getElementById("iniciar");
let detener = document.getElementById("detener");
let pausar = document.getElementById("pausar");
let continuar = document.getElementById("continuar");

let tiempoRestante;
let intervalo;

function iniciarTemporizador() {
    iniciar.disabled = true;
    detener.disabled = false;
    pausar.disabled = false;
    continuar.disabled = true;
    const horas = horasInput.value ? parseInt(horasInput.value) : 0;
    const minutos = minutosInput.value ? parseInt(minutosInput.value) : 0;
    const segundos = segundosInput.value ? parseInt(segundosInput.value) : 0;
    tiempoRestante = (horas * 3600 + minutos * 60 + segundos) * 1000;

    intervalo = setInterval(() => {
        const horasRestantes = Math.floor(tiempoRestante / 3600000);
        const minutosRestantes = Math.floor((tiempoRestante % 3600000) / 60000);
        const segundosRestantes = Math.floor((tiempoRestante % 60000) / 1000);
        temporizadorDiv.innerHTML = `${horasRestantes}:${minutosRestantes}:${segundosRestantes}`;
        tiempoRestante -= 1000;
        if (tiempoRestante < 0) {
            clearInterval(intervalo);
            temporizadorDiv.innerHTML = 'Tiempo agotado';
            iniciar.disabled = false;
            detener.disabled = true;
            pausar.disabled = true;
            continuar.disabled = true;
        }
    }, 1000);
}


function detenerTemporizador() {
    clearInterval(intervalo);
    temporizadorDiv.innerHTML = `00:00:00`;
    iniciar.disabled = false;
    detener.disabled = true;
    pausar.disabled = true;
    continuar.disabled = true;
}
function pausarTemporizador() {
    clearInterval(intervalo);
    iniciar.disabled = true;
    detener.disabled = false;
    pausar.disabled = true;
    continuar.disabled = false;
}
function continuarTemporizador() {
    iniciar.disabled = true;
    detener.disabled = false;
    pausar.disabled = false;
    continuar.disabled = true;
    intervalo = setInterval(() => {
        const horasRestantes = Math.floor(tiempoRestante / 3600000);
        const minutosRestantes = Math.floor((tiempoRestante % 3600000) / 60000);
        const segundosRestantes = Math.floor((tiempoRestante % 60000) / 1000);
        temporizadorDiv.innerHTML = `${horasRestantes}:${minutosRestantes}:${segundosRestantes}`;
        tiempoRestante -= 1000;
        if (tiempoRestante < 0) {
            clearInterval(intervalo);
            temporizadorDiv.innerHTML = 'Tiempo agotado';
            iniciar.disabled = false;
            detener.disabled = true;
            pausar.disabled = true;
            continuar.disabled = true;
        }
    }, 1000);

}