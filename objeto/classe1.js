// Definindo a classe 'Lancamento' para representar um lançamento financeiro
class Lancamento {
  constructor(nome = "Genérico", valor = 0) {
    this.nome = nome; // Nome do lançamento
    this.valor = valor; // Valor do lançamento
  }
}

// Definindo a classe 'CicloFinanceiro' para representar um ciclo financeiro
class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes; // Mês do ciclo financeiro
    this.ano = ano; // Ano do ciclo financeiro
    this.lancamentos = []; // Array para armazenar os lançamentos financeiros
  }
  addLancamentos(...lancamentos) {
    // Método para adicionar vários lançamentos de uma vez
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }
  sumario() {
    // Método para calcular o valor consolidado de todos os lançamentos
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

// Criando instâncias da classe 'Lancamento' para representar um salário e uma conta de luz
const salario = new Lancamento("Salário", 45000);
const contaDeLuz = new Lancamento("Luz", -220);

// Criando uma instância da classe 'CicloFinanceiro' para representar um ciclo financeiro
const contas = new CicloFinanceiro(6, 2018);

// Adicionando os lançamentos à instância do ciclo financeiro
contas.addLancamentos(salario, contaDeLuz);

// Exibindo o valor consolidado dos lançamentos
console.log(contas.sumario());
