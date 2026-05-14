const vambora=document.getElementById("Check");
vambora.addEventListener("click", verificarNota);
situacao=document.getElementById("situacao");
function verificarNota(){
   const nota1=document.getElementById("nota1").value;
   console.log(nota1);
   const nota2=document.getElementById("nota2").value;
   console.log(nota2);
   const nota3=document.getElementById("nota3").value;
   console.log(nota3);
   let media=(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
   console.log(media.toFixed(2));
   let restante=document.getElementById("restante");
   if(media>=7){
    console.log("Aprovado");
    situacao.innerHTML='<h3>Situação: Aprovado</h3>';
    situacao.style.color = "blue";
   }else{
    if(media<=7&&media>4){
        console.log("Exame");
        situacao.innerHTML='<h3>Situação: Exame</h3>';
        situacao.style.color = "green";
        let falta=10-media;
        restante.innerHTML = `<h3>Falta ${falta.toFixed(2)} para média 10</h3>`;
    }else{
        console.log("Reprovado");
        situacao.innerHTML='<h3>Situação: Reprovado</h3>';
        situacao.style.color = "red";
    }
   }
}
