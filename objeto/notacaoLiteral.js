// Declarando constantes a, b e c com valores numéricos
const a = 1;
const b = 2;
const c = 3;

// Criando um objeto obj1 e atribuindo valores das constantes a, b e c a propriedades com o mesmo nome
const obj1 = {
  a: a,
  b: b,
  c: c,
};

// Criando um objeto obj2 e usando a sintaxe de propriedades abreviadas para atribuir valores das constantes a, b e c
const obj2 = {
  a,
  b,
  c,
};

// Exibindo os objetos obj1 e obj2 no console
console.log(obj1, obj2);

// Declarando constantes nomeAttr e valorAttr
const nomeAttr = "Nota";
const valorAttr = 7.87;

// Criando um objeto vazio obj3 e atribuindo uma propriedade com o nome da constante nomeAttr e valor da constante valorAttr
obj3[nomeAttr] = valorAttr;

// Exibindo o objeto obj3 no console
console.log(obj3);

// Criando um objeto obj4 usando a sintaxe de propriedades computadas para criar uma propriedade com o nome da constante nomeAttr e valor da constante valorAttr
const obj4 = { [nomeAttr]: valorAttr };

// Exibindo o objeto obj4 no console
console.log(obj4);

// Criando um objeto obj5 com duas funções como propriedades, uma usando a sintaxe de função tradicional e a outra usando a sintaxe de função abreviada
const obj5 = {
  funcao1: function () {
    // ...
  },
  funcao2() {
    // ...
  },
};

// Exibindo o objeto obj5 no console
console.log(obj5);
