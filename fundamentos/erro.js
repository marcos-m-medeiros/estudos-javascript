// Esta função recebe um erro como entrada e lança um novo objeto de erro personalizado.
function tratarErroELancar(erro) {
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

// Esta função recebe um objeto 'obj' como entrada e tenta imprimir seu nome em maiúsculas com exclamações.
function imprimirNomeGritado(obj) {
  try {
    // Tenta imprimir o nome em maiúsculas com exclamações.
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    // Se ocorrer um erro (por exemplo, se 'obj' não tiver a propriedade 'name'), capturamos o erro e passamos para a função tratarErroELancar.
    tratarErroELancar(e);
  } finally {
    // Esta parte do código será sempre executada, independentemente de haver ou não um erro.
    console.log("Final.");
  }
}

// Criamos um objeto 'obj' com uma propriedade 'name'.
const obj = { name: "Roberto" };

// Chamamos a função imprimirNomeGritado com o objeto 'obj'.
imprimirNomeGritado(obj);