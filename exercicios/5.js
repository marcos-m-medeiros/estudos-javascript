let valor = 1231;

function formatar(valor) {
  let brl = Intl.NumberFormat("BRL", {
    style: "currency",
    currency: "BRL",
  });
  return brl.format(valor);
}

console.log(formatar(valor));