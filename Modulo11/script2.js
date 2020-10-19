let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

// ctx.moveTo(0, 0);
// ctx.lineTo(250, 250);
// ctx.lineTo(500, 0);
// ctx.stroke();

// ctx.fillStyle = "red";
// ctx.fillRect(250, 250, 50, 100);

// ctx.strokeStyle = "blue";
// ctx.strokeRect(310, 250, 50, 200);

let circle = {
    x: 30,
    y: 300,
    raio: 100,
    inicio: 0,
    fim: 0,
}

function drawCircle(c) {
    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle = "beige";
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);
    ctx.fill();
    ctx.stroke();
}

setInterval(function() {
    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.1;
        circle.x += 3;
    }
    drawCircle(circle);
}, 50)