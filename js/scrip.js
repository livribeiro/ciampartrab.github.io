const urlApi = 'https://news-api-node.herokuapp.com/api/v1/news/ea30897c-67fe-4f79-896a-369366a914bb'
const postFeitos = document.querySelector('.posts')

const novosPosts = (novaMensagem, novoElemento) => {
    const elemento = novoElemento
    const mensagem = novaMensagem
    elemento.appendChild(mensagem)
    postFeitos.appendChild(elemento)
}

function enviar() {

    var comment = document.getElementById("texto").value

    var poster = {
        post: `${comment}`
    };


    fetch(urlApi, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(poster)
    })

    .then(results => results.json())
        .then(console.log)
    start()

}

const start = () => {
    fetch(urlApi)
        .then(function(response) {
            response.json()

            .then(function(data) {


                data.forEach(dados => {
                    var novaMensagem = document.createTextNode(dados.post)
                    var novoElemento = document.createElement('p')
                    novosPosts(novaMensagem, novoElemento)
                })

            })
        })
}
start()