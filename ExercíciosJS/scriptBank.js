    function calcularSimulacao() {
        const taxaBandeiraPerc = parseFloat(document.getElementById('bandeira').value);
        const valorVenda = parseFloat(document.getElementById('valorVenda').value);
        const numParcelas = parseInt(document.getElementById('parcelas').value);
        const taxaFixaMensal = 12.50;
        const jurosMensalPerc = 0.0035;
        const valorTaxaBandeira = valorVenda * taxaBandeiraPerc;
        const valorJurosTotais = valorVenda * jurosMensalPerc * numParcelas;
        const valorTaxaFixaTotal = taxaFixaMensal * numParcelas;
        const valorFinalTotal = valorVenda + valorTaxaBandeira + valorJurosTotais + valorTaxaFixaTotal;
        const valorParcela = valorFinalTotal / numParcelas;
        document.getElementById('resTaxa').innerText = `R$ ${valorTaxaBandeira.toFixed(2)}`;
        document.getElementById('resJuros').innerText = `R$ ${valorJurosTotais.toFixed(2)}`;
        document.getElementById('resTaxaMensal').innerText = `R$ ${valorTaxaFixaTotal.toFixed(2)}`;
        document.getElementById('resParcela').innerText = `R$ ${valorParcela.toFixed(2)}`;
        document.getElementById('resultado').style.display = 'block';
    }