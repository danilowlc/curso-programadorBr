// Carne - 400g por pessoas + de 6 horas 650g
// Cerveja - 1200ml por Pessoa + 6h - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6h 1500ml
// criancas valem por 0.5

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById('resultado');

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = (carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)) / 1000;
    let qtdTotalBebidas = (bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas)) / 1000;
    let qtdTotalCerveja = (cervejaPP(duracao) * adultos) / 355;

    resultado.innerHTML = `<p>${qtdTotalCarne} Kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${qtdTotalBebidas} L de Bebidas</p>`;
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}