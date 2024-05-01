// Seleciona o elemento <h1> na página HTML
titulo = document.querySelector('h1');

// Altera o conteúdo do elemento <h1> para 'Hora do desafio'
titulo.innerHTML = 'Hora do desafio';

// Função que imprime uma mensagem no console quando o botão 'console' é clicado
function cliqueConsole() {
    console.log('Botão console foi clicado');
}

// Função que exibe um alerta com a mensagem 'Eu amo Js' quando o botão 'alert' é clicado
function cliqueArlet() {
    alert('Eu amo Js');
}

// Função que solicita ao usuário o nome de uma cidade e exibe um alerta com uma mensagem personalizada
function cliquePrompt() {
    // Solicita ao usuário o nome de uma cidade e armazena o valor na variável 'cidade'
    let cidade = prompt('Digite o nome de uma cidade:');
    // Exibe um alerta com uma mensagem personalizada contendo o nome da cidade digitada pelo usuário
    alert(`Estive em ${cidade} e lembrei de você`);
}

// Função que solicita dois números ao usuário, realiza a soma e exibe o resultado em um alerta
function cliqueSoma() {
    // Solicita ao usuário dois números e armazena os valores nas variáveis 'numero1' e 'numero2'
    let numero1 = prompt('Digite um número');
    let numero2 = prompt('Digite outro número');
    
    // Converte os valores obtidos dos prompts para números inteiros usando parseInt()
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    // Calcula a soma dos dois números
    let soma = numero1 + numero2;
    // Exibe um alerta com a soma dos números informados pelo usuário
    alert(`A soma de ${numero1} + ${numero2} é ${soma}`);
}