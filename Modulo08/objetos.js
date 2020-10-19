function calcMedia() {
    var soma = 0;
    for (var i = 0 in this.notas) {
        soma += this.notas[i];
    }

    return soma / this.notas.length;
}

var aluno = {
    nome: "Danilo",
    notas: [5, 10, 5, 9.5],
    media: calcMedia
}

var aluno1 = {
    nome: "Lauane",
    notas: [7, 10, 7, 9.5],
    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());