// Defina uma função chamada carro que recebe um modelo de carro como argumento.
let carro = (carro) => {
    // Use o método toLowerCase() para tornar o texto em letras minúsculas e tornar a comparação de casos insensível.
    switch (carro.toLowerCase()) {
        case 'hatch':
            console.log('Compra efetuada com sucesso.'); // Se o modelo for 'hatch', imprima uma mensagem de sucesso.
            break;
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?'); // Se o modelo for 'sedan', 'motocicleta' ou 'caminhonete', imprima uma mensagem sugerindo outro modelo.
            break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui.'); // Se o modelo não corresponder a nenhum dos casos anteriores, imprima uma mensagem de que o modelo não é suportado.
            break;
    }
}

// Chame a função carro com um modelo de carro de exemplo ('hatch') para ver a resposta.
carro('hatch');