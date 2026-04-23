
function add(){

    // 1. Seleciona o container onde os cards serão inseridos
    const container = document.getElementById('Cards');

    // 2. Define os dados do novo jogador (Você pode evoluir isso para um formulário depois)
    const novoJogador = {
        nome: "Lucas Tolentino Coelho de Lima",
        rank: "8,8",
        nascimento: "27/08/1997 (28 anos)",
        altura: "1,80 m",
        posicao: "Meio-campista",
        imagem: "img/Lucas_Paqueta.webp", // Certifique-se de ter essa imagem
    };

    // 3. Cria a estrutura HTML do card
    const cardHTML = `
        <div class="card" style="width: 22rem; margin-left: 15px;">
            <img src="${novoJogador.imagem}" class="card-img-top" alt="${novoJogador.nome}">
            <div class="card-body">
                <h5 class="card-title">
                    <span>${novoJogador.nome}</span>
                    <span class="badge text-bg-secondary">${novoJogador.rank}</span>
                </h5>
                <p class="card-text">
                    <strong>Nascimento:</strong> ${novoJogador.nascimento}<br>
                    <strong>Altura:</strong> ${novoJogador.altura}<br>
                    <strong>Posição:</strong> ${novoJogador.posicao}<br>
                </p>
            </div>
        </div>
    `;

    // 4. Adiciona o novo card ao final do conteúdo atual
    container.innerHTML += cardHTML;
}


