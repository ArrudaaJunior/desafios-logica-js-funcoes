// Função que imprime 'Olá, Mundo!' no console
function olaMundo(){
    console.log('Olá, Mundo!');
}

// Função que imprime 'Olá, nome!' com alert
function olaNome() {
    let nome = prompt('Qual é o seu nome?');
    return alert(`Olá, ${nome}!`);
}

// Função que solicita um número ao usuário, calcula o dobro desse número e exibe o resultado em um alerta
function dobroNumero() {
    // Solicita ao usuário que insira um número
    let numero = prompt('Digite um número');
    // Converte o valor inserido para um número inteiro
    numero = parseInt(numero);
    // Calcula o dobro do número inserido
    let numeroDobro = numero * 2;
    // Retorna um alerta com o número original e o dobro
    return alert(`O dobro de ${numero} é ${numeroDobro}`);
}

// Função que solicita três números ao usuário, calcula a média e exibe o resultado em um alerta
function mediaNumero() {
    // Solicita ao usuário que insira três números
    let numero1 = prompt('Digite um número');
    let numero2 = prompt('Digite outro número');
    let numero3 = prompt('Digite mais um número');

    // Converte os valores inseridos para números inteiros
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    numero3 = parseInt(numero3);

    // Calcula a média dos três números
    let mediaNumero = (numero1 + numero2 + numero3) / 3;

    // Retorna um alerta com os números inseridos e a média
    return alert(`A média dos números ${numero1}, ${numero2} e ${numero3} é ${mediaNumero}`);
}

// Função que solicita dois números ao usuário, verifica qual é o maior e exibe o resultado em um alerta
function maiorNumero() {
    // Solicita ao usuário que insira dois números
    let numero1 = prompt('Digite um número');
    let numero2 = prompt('Digite outro número');

    // Converte os valores inseridos para números inteiros
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    // Verifica qual número é maior usando uma estrutura condicional
    if (numero1 > numero2){
        alert(`O número maior é ${numero1}`);
    } else {
        alert(`O número maior é ${numero2}`);
    }
}

// Função que calcula e retorna o quadrado de um número
function multiplicacaoPorSiMesmo(numero) {
    // Multiplica o número por ele mesmo e retorna o resultado
    return numero * numero;
}

// Exemplo de uso da função 'multiplicacaoPorSiMesmo'
let resultado = multiplicacaoPorSiMesmo(5); // Retorna 25, pois 5 * 5 = 25
console.log(resultado); // Saída: 25
