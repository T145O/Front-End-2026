const botao = document.getElementById("proximo");

botao.onclick = function () {
    console.log("apertou meu botão");
    //Grupo A
    const tituloD = document.querySelector("#grupoA h3");
    tituloD.innerText = "GRUPO D";
    const selecoesD = document.querySelectorAll("#grupoA ul li");
    selecoesD[0].innerText = "Estados Unidos";
    selecoesD[1].innerText = "Paraquai";
    selecoesD[2].innerText = "Austrália";
    selecoesD[3].innerText = "Turquia";
    const fatosD = document.querySelector("#grupoA details");
    fatosD.innerText = "Fatos: Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.";
    //Grupo B
    const tituloE = document.querySelector("#grupoB h3");
    tituloE.innerText = "GRUPO E";
    const selecoesE = document.querySelectorAll("#grupoB ul li");
    selecoesE[0].innerText = "Alemanha";
    selecoesE[1].innerText = "Equador";
    selecoesE[2].innerText = "Costa do Marfin";
    selecoesE[3].innerText = "Curaçao";
    const fatosE = document.querySelector("#grupoB details");
    fatosE.innerText = "Fatos: Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.";
    //Grupo C
    const tituloF = document.querySelector("#grupoC h3");
    tituloF.innerText = "GRUPO F";
    const selecoesF = document.querySelectorAll("#grupoC ul li");
    selecoesF[0].innerText = "Holanda";
    selecoesF[1].innerText = "Japão";
    selecoesF[2].innerText = "Tunísia";
    selecoesF[3].innerText = "Suécia";
    const fatosF = document.querySelector("#grupoC details");
    fatosF.innerText = "Fatos: Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.";
}