console.log("=======================");
let p1 = document.getElementById("p1");
console.log(p1);
console.log("=======================");
let paragrafo = document.getElementsByClassName("paragrafo");

for (let p of paragrafo) {
    console.log(p);
}
console.log("=======================");
let elementP = document.getElementsByTagName("p");

for (let p of elementP) {
    console.log(p);
}

console.log("=======================");