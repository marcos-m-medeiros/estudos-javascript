// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

let today = new Date()
let weekday = today.getDay() + 1

switch(weekday) {
    case 1:
        console.log('Domingo.')
        console.log('Fim de semana.')
        break
    case 2:
        console.log('Segunda-feira.')
        console.log('Dia útil.')
        break
    case 3:
        console.log('Terça-feira.')
        console.log('Dia útil.')

        break
    case 4:
        console.log('Quarta-feira.')
        console.log('Dia útil.')
    case 5:
        console.log('Quinta-feira.')
        console.log('Dia útil.')
        break
    case 6:
        console.log('Sexta-feira.')
        console.log('Dia útil.')
    
        break
    case 7:
        console.log('Sábado.')
        console.log('Fim de semana.')
        break
    default:
        console.log('Dia inválido.')
        break
}