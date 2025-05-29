// Cria um array para armazenar os números digitados pelo usuário
const numeros: number[] = [];

// Usamos um loop para ler 5 números
for (let i = 0; i < 5; i++) {
  // Solicita ao usuário que digite um número
  const entrada: string = prompt(`Digite o ${i + 1}º número:`) || "";

  // Converte a entrada para número
  const numero = parseFloat(entrada);

  // Verifica se a conversão para número foi bem-sucedida
  if (isNaN(numero)) {
    console.log("Valor inválido! Por favor, digite um número.");
    // Decrementa o contador para que o usuário digite novamente o número inválido
    i--;
  } else {
    // Adiciona o número ao array
    numeros.push(numero);
  }
}

// Exibe todos os números armazenados no array
console.log("Os números digitados foram:");
for (const numero of numeros) {
  console.log(numero);
}
