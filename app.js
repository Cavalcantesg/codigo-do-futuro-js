const filmes = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um filme? S/N :')

if (entradaInicial.toLocaleUpperCase()=== 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('Ação e ficção', '/Fantasia', '/Ação e ficção', '/Comédia', '/Humor')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = filmes.filter(filmes =>filmes.categoria === entradaCategoria)
    
    console.table(retorno)
} else {
    const filmesOrdenados = filmes.sort((a,b) => a.tempo - b.tempo)
    console.log('Essas são todos os filmes disponiveis:')
    console.log('Ordenados pelo tempo de duração:')
    console.table(filmesOrdenados)
}