// Cria um objeto Date que representa a data e hora atuais.
let today = new Date();

// Obtém o dia da semana atual (um número entre 0 e 6, onde 0 representa Domingo, 1 representa Segunda-feira, etc.).
let weekday = today.getDay() + 1; // Adiciona 1 para fazer a correspondência com o seu switch.

// Inicia um bloco switch com base no valor de 'weekday'.
switch (weekday) {
    case 1:
        console.log('Domingo.');
        console.log('Fim de semana.');
        break;
    case 2:
        console.log('Segunda-feira.');
        console.log('Dia útil.');
        break;
    case 3:
        console.log('Terça-feira.');
        console.log('Dia útil.');
        break;
    case 4:
        console.log('Quarta-feira.');
        console.log('Dia útil.');
        break;
    case 5:
        console.log('Quinta-feira.');
        console.log('Dia útil.');
        break;
    case 6:
        console.log('Sexta-feira.');
        console.log('Dia útil.');
        break;
    case 7:
        console.log('Sábado.');
        console.log('Fim de semana.');
        break;
    default:
        console.log('Dia inválido.');
        break;
}