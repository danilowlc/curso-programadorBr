function h1click() {
    console.log("Executando o Elemento");
}

function changeH1(input) {
    let h1 = document.getElementsByTagName("h1")[1];
    h1.innerText = input.value;
}

function hideH1() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style.display = "none";
}