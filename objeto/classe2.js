// Definindo a classe 'Avo' para representar um avô com um sobrenome
class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome; // Atribuindo o sobrenome ao avô
  }
}

// Definindo a classe 'Pai' que herda de 'Avo' para representar um pai com um sobrenome e uma profissão
class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome); // Chamando o construtor da classe 'Avo' para definir o sobrenome do pai
    this.profissao = profissao; // Atribuindo a profissão ao pai
  }
}

// Definindo a classe 'Filho' que herda de 'Pai' (que, por sua vez, herda de 'Avo')
class Filho extends Pai {
  constructor() {
    super("Silva"); // Chamando o construtor da classe 'Pai' para definir o sobrenome do filho como "Silva"
  }
}

// Criando uma instância da classe 'Filho'
const filho = new Filho();

// Exibindo a instância do filho, que herda o sobrenome "Silva" do pai e a profissão padrão "Professor" do avô
console.log(filho);
