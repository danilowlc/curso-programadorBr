// alert("Hello World");
console.log("Hello World");

var a = "Placa de Captura";
console.log(a);

var b = 30;
var c = "30";
console.log("Valor de c " + c);
console.log("Valor de b " + b);


console.log(b === c);

var alunos = new Array("Danilo", "Ana  Paula", 150);
console.log(alunos)

for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

//Funcoes
function media(nota1 = 10, nota2 = 8) {
    return media = (nota1 + nota2) / 2;
}

console.log(media());