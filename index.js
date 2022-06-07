const treta = document.querySelector('button')
const casaDaTreta = document.querySelector('body')
treta.addEventListener('click', ativarTreta)

function listarTreta(aTreta){

    const {vidio, tipo, verdad, mitira} = aTreta

    let video = document.createElement('video')
    video.preload = verdad
    video.loop = verdad
    video.autoplay = verdad
    let source = document.createElement('source')
    source.src = vidio
    source.type = tipo
    let embed = document.createElement('embed')
    embed.src = vidio
    embed.type = verdad
    video.appendChild(source)
    video.appendChild(embed)

    casaDaTreta.appendChild(video)
    treta.remove()
}
function criarTreta(){
    const aTreta = {
        vidio: "hihihiha.mp4",
        tipo: "video/mp4",
        verdad: "True",
        mitira: "False"
    }
    listarTreta(aTreta)
}

function ativarTreta(event){
    event.preventDefault();
    criarTreta()
}