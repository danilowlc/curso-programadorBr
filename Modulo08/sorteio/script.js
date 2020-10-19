let pessoas = ["Danilo", "Lauane", "Gabrielle", "Ana Paula"];

function sortear() {
    let np = pessoas.length;
    let ns = Math.floor(Math.random() * np);
    document.getElementById("d").innerHTML = pessoas[ns];
}