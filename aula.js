const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor do combustível: ', (ValorCombustivel) => {
    ValorCombustivel = parseFloat(ValorCombustivel.replace(',', '.'));

    console.log('Valor do combustível:', ValorCombustivel);

    rl.question('Gasto médio de combustível por KM: ', (GastoMedio) => {
        GastoMedio = parseFloat(GastoMedio);

        console.log('Valor gasto por KM: ', GastoMedio);

        rl.question('Distância em KM da viagem: ', (DistanciaViagem) => {
            DistanciaViagem = parseFloat(DistanciaViagem);

            console.log('Distância da viagem: ', DistanciaViagem);

            // Ajuste no fator multiplicador para que o resultado seja em reais (não centavos)
            const custoTotal = (ValorCombustivel * GastoMedio * DistanciaViagem) / 100;
            console.log('Custo total da viagem: ', custoTotal.toFixed(2));
            rl.close();
        });
    });
});

rl.on('close', () => {
    console.log('Encerrando Aplicação.');
    process.exit(0);
});