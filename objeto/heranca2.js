// Evite adicionar propriedades diretamente ao protótipo Object.prototype
Object.prototype.attr0 = "0"; // Isso não é uma boa prática

// Criando um objeto 'avo' com uma propriedade 'attr1'
const avo = { attr1: "A" };

// Criando um objeto 'pai' que herda de 'avo' e possui propriedades 'attr2' e 'attr3'
const pai = { __proto__: avo, attr2: "B", attr3: "3" };

// Criando um objeto 'filho' que herda de 'pai' e substitui a propriedade 'attr3' por outra
const filho = { __proto__: pai, attr3: "C" };

// Exibindo várias propriedades, incluindo as herdadas através da cadeia de protótipos
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

// Definindo um objeto 'carro' com propriedades relacionadas a um veículo
const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
    // Método para acelerar o carro
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    // Método para obter o status do carro
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

// Criando um objeto 'ferrari' que herda de 'carro' e possui uma propriedade 'modelo' (shadowing)
const ferrari = {
  modelo: "F40",
  velMax: 324, // A propriedade 'velMax' é sombreada neste objeto
};

// Criando um objeto 'volvo' que herda de 'carro' e possui um método 'status' personalizado
const volvo = {
  modelo: "V40",
  status() {
    // Método 'status' personalizado que chama o método 'status' do protótipo (super)
    return `${this.modelo}: ${super.status()}`;
  },
};

// Configurando a herança dos objetos 'ferrari' e 'volvo' para 'carro'
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

// Exibindo os objetos 'ferrari' e 'volvo' no console
console.log(ferrari);
console.log(volvo);

// Acelerando o 'volvo' em 100 Km/h e exibindo seu status personalizado
volvo.aceleraMais(100);
console.log(volvo.status());

// Acelerando a 'ferrari' em 300 Km/h (superior à sua velocidade máxima) e exibindo seu status
ferrari.aceleraMais(300);
console.log(ferrari.status());
