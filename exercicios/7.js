// Defina uma função chamada bhaskara que calcula as raízes de uma equação quadrática.
function bhaskara(a, b, c) {
  // Calcule o valor do delta usando a fórmula delta = b^2 - 4ac.
  const delta = b * b - 4 * a * c;

  // Verifique se o delta é negativo, o que significa que não há raízes reais.
  if (delta < 0) {
    console.log("Sem raízes reais");
  } else {
    // Calcule as duas raízes usando a fórmula de Bhaskara.
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    // Imprima as raízes no console.
    console.log("Raiz 1:", x1);
    console.log("Raiz 2:", x2);
  }
}

// Chame a função bhaskara com coeficientes de exemplo (a=1, b=-1, c=-6) e imprima as raízes no console.
console.log(bhaskara(1, -1, -6));