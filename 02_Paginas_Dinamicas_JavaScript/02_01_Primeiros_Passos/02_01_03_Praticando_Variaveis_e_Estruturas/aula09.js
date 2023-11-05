// Exercicio 05

/*

    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código para condição de pagamento:
    1 - À vista DÉBITO, recebe 10% de desconto;
    2 - À vista DINHEIRO ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
    
*/

let precoEtiqueta = 100;
let condicaoPagamento = 4;

let debito = precoEtiqueta - (precoEtiqueta * 0.1);
let dinheiro = precoEtiqueta - (precoEtiqueta * 0.15);
let duasVezes = precoEtiqueta;
let parcelado = precoEtiqueta + (precoEtiqueta * 0.10)


if (condicaoPagamento === 1) {
    console.log('Escolhido débito, valor final:', debito)
} else if (condicaoPagamento === 2) {
    console.log('Escolhido dinheiro ou pix, valor final:', dinheiro)
} else if (condicaoPagamento === 3) {
    console.log('Escolhido duas parcelas, valor final:', duasVezes)
} else if (condicaoPagamento === 4) {
    console.log('Escolhido parcelado mais que duas vezes, valor final:', parcelado)
} else {
    console.log('Método de pagamento não é válido')
}
