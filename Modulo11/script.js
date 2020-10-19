// let thumbUp = document.getElementById("like")

// thumbUp.addEventListener("click", function() {
//     thumbUp.setAttribute('src', 'Thumbs-Down.png')
// })

// let lista = document.getElementById("lista")
// let num = parseInt(lista.getAttribute("num"))

// let conteudo = ""

// for (let i = 1; i < num + 1; i++) {
//     conteudo += "<li>" + i + "</li>"
// }

// lista.innerHTML = conteudo

let video = document.getElementById("video1")

function backward15() {
    video.currentTime -= 15;
}

function iniciar() {
    video.play();
}

function pausar() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function forward15() {
    video.currentTime += 15;
}

function velocidadeMenos() {
    video.playbackRate -= 0.1;
    console.log(video.playbackRate);
}

function velocidadeMais() {
    video.playbackRate += 0.1;
    console.log(video.playbackRate);
}

function reset_velocidade() {
    video.playbackRate = 1.0;
    console.log(video.playbackRate);
}

function telaCheia() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}