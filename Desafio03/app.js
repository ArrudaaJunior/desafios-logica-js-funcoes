// Função para calcular o IMC (Índice de Massa Corporal)
function imc(){
    // Solicita à pessoa que insira sua altura e peso
    let altura = prompt('Digite sua Altura:');
    let peso = prompt('Digite seu peso:');
    
    // Calcula o IMC usando a fórmula peso / (altura * altura)
    let imc = peso / (altura * altura);
    
    // Exibe o resultado do IMC em um alerta
    alert(`Seu IMC é ${imc}`);
}

// Função para calcular o fatorial de um número
function calcularFatorial() {
    // Solicita à pessoa que insira um número
    let numero = prompt('Digite um número:');
    
    // Verifica se o número é 0 ou 1, nesses casos, o fatorial é 1
    if (numero == 0 || numero == 1) {
        alert(`O fatorial de  ${numero} é 1`);
    } else {
        // Inicializa o resultado como 1
        let resultado = 1;
        
        // Calcula o fatorial usando um loop for
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        // Exibe o resultado do fatorial em um alerta
        alert(`O fatorial de  ${numero} é ${resultado}`);
    }
}

// Função para converter um valor em dólar para reais
function converterDolarParaReal() {
    // Solicita à pessoa que insira um valor em dólar para converter
    let valor = prompt('Digite o valor para converter em Reais:');
    
    // Define a cotação do dólar em reais
    const cotacaoDolar = 4.80; 
    
    // Calcula o valor em reais multiplicando o valor em dólar pela cotação
    const valorEmReais = valor * cotacaoDolar;
    
    // Exibe o resultado da conversão em um alerta
    alert(`$ ${valor} dolares convertido em reais é R$ ${valorEmReais}`);
}

// Função para calcular a área e o perímetro de uma sala retangular
function calcularAreaEPerimetroSalaRetangular() {
    // Solicita à pessoa que insira a altura e largura da sala
    let altura = prompt('Digite a altura:');
    let largura = prompt('Digite a altura:');
    
    // Calcula a área da sala multiplicando altura pela largura
    let area = altura * largura;
    
    // Calcula o perímetro da sala usando a fórmula 2 * (altura + largura)
    let perimetro = 2 * (altura + largura);

    // Exibe a área e o perímetro da sala em um alerta
    alert(`Área da sala é ${area} em metros quadrados e o Perímetro da sala é ${perimetro}`);
}

// Função para calcular a área e o perímetro de uma sala circular
function calcularAreaEPerimetroSalaCircular() {
    // Solicita à pessoa que insira o raio da sala circular
    let valor = prompt('Digite o valor do Raio:');
    
    // Define o valor de Pi
    const pi = 3.14;

    // Calcula a área da sala circular usando a fórmula pi * raio * raio
    const area = pi * valor * valor;
    
    // Calcula o perímetro da sala circular usando a fórmula 2 * pi * raio
    const perimetro = 2 * pi * valor;
    
    // Exibe a área e o perímetro da sala circular em um alerta
    alert(`Área do circulo da sala é ${area.toFixed(2)} metros quadrados e o Perímetro da sala circular é ${perimetro.toFixed(2)} metros`);
}

// Função para mostrar a tabuada de um número
function mostrarTabuada() {
    // Solicita à pessoa que insira um número para a tabuada
    let numero = prompt('Digite um número:');
    
    // Exibe a mensagem da tabuada em um alerta
    alert("Tabuada do " + numero + ":");
    
    // Usa um loop para calcular e exibir a tabuada
    for (let i = 1; i <= 10; i++) {
       alert(numero + " x " + i + " = " + (numero * i));
    }
}