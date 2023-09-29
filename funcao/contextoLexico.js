// Declara uma variável global chamada 'valor' e atribui o valor "Global" a ela.
const valor = "Global";

// Declara uma função chamada 'minhaFuncao' que imprime o valor da variável 'valor'.
function minhaFuncao() {
  console.log(valor);
}

// Declara uma função chamada 'exec'.
function exec() {
  // Declara uma variável local chamada 'valor' dentro da função 'exec' e atribui o valor "Local" a ela.
  const valor = "Local";

  // Chama a função 'minhaFuncao', que está definida fora do escopo da função 'exec'.
  // Dentro da função 'minhaFuncao', 'valor' refere-se à variável global 'valor' porque não há uma variável local com o mesmo nome dentro da função 'minhaFuncao'.
  minhaFuncao();
}

// Chama a função 'exec', que por sua vez chama a função 'minhaFuncao'.
exec();
