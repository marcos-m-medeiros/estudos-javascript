// Defina um salário inicial.
let salario = 1000;

// Defina os planos de trabalho como porcentagens em um objeto.
const plano = {
  a: 10,
  b: 15,
  c: 20,
};

// Crie um objeto de formatação de número para formatar valores em moeda brasileira (BRL).
let brlBR = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// Crie uma função chamada aumento que calcula o novo salário com base no plano selecionado.
let aumento = (novoSalario) => {
  console.log(
    "Você pode apenas escolher um plano de trabalho. A = 10%, B = 15%, C = 20%."
  );

  // Use uma instrução switch para verificar o plano de trabalho selecionado.
  switch (novoSalario.toLowerCase()) {
    case "a":
      novoSalario = (plano.a / 100) * salario;
      console.log(
        `Você selecionou o PLANO A: 10%. \n\nSeu novo salário: ${brlBR.format(
          novoSalario + salario
        )}.`
      );
      break;
    case "b":
      novoSalario = (plano.b / 100) * salario;
      console.log(
        `Você selecionou o PLANO B: 15%. \n\nSeu novo salário: ${brlBR.format(
          novoSalario + salario
        )}.`
      );
      break;
    case "c":
      novoSalario = (plano.c / 100) * salario;
      console.log(
        `Você selecionou o PLANO C: 20%. \n\nSeu novo salário: ${brlBR.format(
          novoSalario + salario
        )}.`
      );
      break;
    default:
      if (novoSalario == "") {
        console.log("Você não digitou o seu plano de trabalho.");
      } else {
        console.log("Plano inválido. Você digitou: " + novoSalario);
      }
  }
};

// Chame a função aumento com um plano de exemplo ('c') para calcular o aumento salarial e imprimir o novo salário.
aumento("c");