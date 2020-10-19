// function criarAluno(nome, n1, n2) {
//     return {
//         nome: nome,
//         n1: n1,
//         n2: n2,
//         media: function() {
//             return (this.n1 + this.n2) / 2;
//         }
//     }
// }


function aluno(nome, n1, n2) {
    this.nome = nome;
    this.n1 = n1;
    this.n2 = n2;

    this.media = function() {
        return (this.n1 + this.n2) / 2;
    }
}

// var turma = [
//     criarAluno("Danilo", 7, 8),
//     criarAluno("Lauane", 7, 4.5),
//     criarAluno("Ana Paula", 8.0, 9.5),
// ]

var turma = [
    new aluno("Danilo", 7, 8),
    new aluno("Lauane", 7, 4.5),
    new aluno("Ana Paula", 8.0, 9.5),
]



console.log("===================");

// for (let index = 0; index < turma.length; index++) {
//     const element = turma[index];
//     console.log("Nome: " + element.nome);
//     console.log("Media: " + element.media());
//     console.log("===================");
// }

// turma.forEach(function(element) {
//     console.log("Nome: " + element.nome);
//     console.log("Media: " + element.media());
//     console.log("===================");
// })

for (var aluno of turma) {
    console.log("Nome: " + aluno.nome);
    console.log("Media: " + aluno.media());
    console.log("===================");
}