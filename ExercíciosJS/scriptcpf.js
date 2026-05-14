function verificar(){
    const cpf = document.getElementById("CPF").value;
    const resultado = document.getElementById('resultado');
    console.log(cpf);
    let soma = 0;
    let resto;
    

    for(let i=1;i<=9;i++){
        soma=soma+parseInt(cpf.substring(i-1,i))*(11-i);
    }
    resto=(soma*10) % 11;
    if((resto===10)||(resto===11)) resto=0;
    if(resto !== parseInt(cpf.substring(9,10))){
        console.log("Inválido");
        resultado.innerText = "CPF Inválido";
        resultado.style.color="red";
        return false;
    } 
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    rest = (sum * 10) % 11;
    if ((rest === 10) || (rest === 11)) rest = 0;
    if (rest !== parseInt(cpf.substring(10, 11))){
        console.log("Inválido");
        resultado.innerText = "CPF Inválido";
        resultado.style.color="red";
        return false;
    } 
    console.log("Válido");
    resultado.innerText = "CPF Válido";
    resultado.style.color="green";
    return true;
}
