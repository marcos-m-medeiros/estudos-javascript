// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação

// Definindo uma variável global chamada 'x' com o valor "Global"
const x = "Global";

// Definindo uma função chamada 'fora'
function fora() {
  // Dentro da função 'fora', é declarada uma variável 'x' com o valor "Local"
  const x = "Local";

  // Definindo uma função interna chamada 'dentro'
  function dentro() {
    // A função 'dentro' retorna o valor da variável 'x' no contexto em que foi criada,
    // ou seja, ela acessa a variável 'x' da função 'fora' (closure).
    return x;
  }

  // Retornando a função 'dentro' como resultado da função 'fora'
  return dentro;
}

// A função 'fora' é chamada e seu resultado (a função 'dentro') é atribuído à variável 'minhaFuncao'
const minhaFuncao = fora();

// Chamando a função 'minhaFuncao', que é na verdade a função 'dentro' definida dentro de 'fora'
// Ela acessa a variável 'x' da função 'fora', que tem o valor "Local"
console.log(minhaFuncao()); // Isso imprimirá "Local" no console
