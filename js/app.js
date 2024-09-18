function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //console.log(campoPesquisa);

    // se campoPesquisa for uma string sem nada 
    // if (campoPesquisa =="") {
    //     section.innerHTML = " <p>Não foram encontrados resultados</p>"
    //     return
    // }
  
    if (!campoPesquisa) {
        section.innerHTML = "<p style='color: #dddddd; font-size: 24px; font-weight: bold;'>Não foram encontrados resultados, Digitar o que procura.</p>";
        return;
    }
   
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = ""; 
    let tags = "";

    // Itera sobre cada item de dado e constrói o HTML correspondente
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
         

            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="images/hamburguer-artesanal-picanha.jpg" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-hamb">${dado.descricao}</p>
                <a href=${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
          
        }

    // Atualiza o conteúdo HTML da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  
}
}
