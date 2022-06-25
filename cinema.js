let cinema = "CineHouse"

let catalogo = require('./database/catalogo.json');
const fs = require('fs');

const adicionarFilme = (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) => {
    const novoFilme = {
        codigo: codigo,
        titulo: titulo,
        duracao: duracao,
        atores: atores,
        anoDeLancamento: anoDeLancamento,
        emCartaz: emCartaz
    }
    catalogo.filmes.push(novoFilme);
    const json = JSON.stringify(catalogo);
    fs.writeFileSync('./database/catalogo.json', json);
}

const buscarFilme = (codigo) => {
    for (let i = 0; i < catalogo.filmes.length; i++) {
        catalogo.filmes[i].codigo === codigo ? console.log(catalogo.filmes[i]) : ''
    }
}

const listarTodosOsFilmes = () => {
    for (let i = 0; i < catalogo.filmes.length; i++) {
        return catalogo.filmes
    }
}

let listarFilmesEmCartaz = catalogo.filmes.filter(function (obj) {
    return obj.emCartaz == true;
})

let alterarStatusEmCartaz = codigo => {
    for (let i = 0; i < catalogo.filmes.length; i++) {
        catalogo.filmes[i].codigo === codigo ? catalogo.filmes[i].emCartaz = !catalogo.filmes[i].emCartaz : '';
        console.log(catalogo.filmes[i])
    }
}