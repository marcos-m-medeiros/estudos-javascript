// Criando um objeto chamado 'sequencia'
const sequencia = {
  // Usando uma convenção de nomenclatura comum para indicar que '_valor' é uma variável interna (privada)
  _valor: 1, // O valor inicial é 1

  // Definindo um 'getter' (acessor) para a propriedade 'valor'
  get valor() {
    // Este método é chamado quando a propriedade 'valor' é lida
    // Retorna o valor atual de '_valor' e, em seguida, incrementa '_valor' em 1
    return this._valor++;
  },

  // Definindo um 'setter' (modificador) para a propriedade 'valor'
  set valor(valor) {
    // Este método é chamado quando a propriedade 'valor' é modificada
    // Verifica se o novo valor é maior que o valor atual de '_valor'
    if (valor > this._valor) {
      // Se for maior, atualiza '_valor' para o novo valor
      this._valor = valor;
    }
  },
};

// Exibindo o valor da propriedade 'valor' duas vezes, usando o getter
console.log(sequencia.valor, sequencia.valor);

// Modificando a propriedade 'valor' para 1000 usando o setter
sequencia.valor = 1000;
// Exibindo o valor da propriedade 'valor' duas vezes, usando o getter
console.log(sequencia.valor, sequencia.valor);

// Tentando definir a propriedade 'valor' para 900, mas como é menor que o valor atual (1000), o setter não atualiza o valor interno '_valor'
sequencia.valor = 900;
// Exibindo o valor da propriedade 'valor' duas vezes, usando o getter
console.log(sequencia.valor, sequencia.valor);
