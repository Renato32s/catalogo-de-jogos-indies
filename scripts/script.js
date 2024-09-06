function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value

    if (!campoPesquisa) {
        section.innerHTML = '<p class="item-resultado">Nada foi encontrado. insira o nome de um jogo para realizar uma busca!</p>'
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = '';
    let titulo = '';
    let descricao = '';

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.trailer}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba Mais</a>
            </div>
        `;
        }
    };

    if (!resultados) {
        resultados = '<p class="item-resultado">Nada foi encontrado</p>';
    }

    section.innerHTML = resultados

}