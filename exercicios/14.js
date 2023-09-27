// Define uma função chamada 'fruit' que aceita um parâmetro chamado 'fruit'.
let fruit = (fruit) => {
    // O switch é usado para testar diferentes valores da variável 'fruit' após converter para minúsculas com 'toLowerCase()'.
    switch (fruit.toLowerCase()) {
        case 'maçã':
            console.log('Não vendemos essa fruta aqui.');
            break;
        case 'kiwi':
            console.log('Estamos em escassez de kiwis.');
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo.');
            break;
        default:
            console.log('O programa só testa maçã, kiwi e melancia.');
            break;
    }
}

// Chama a função 'fruit' com a string 'MeLANCia' como argumento.
fruit('MeLANCia');