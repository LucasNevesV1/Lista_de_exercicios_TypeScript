// Função que converte a temperatura de Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius: number): number {
  // Aplica a fórmula de conversão: F = (C × 9/5) + 32
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit; // Retorna o valor convertido
}

// Solicita ao usuário que digite a temperatura em Celsius (em ambiente de navegador)
const entradaUsuario: string = prompt("Digite a temperatura em Celsius:") || "";

// Converte a entrada para número (caso o usuário digite um texto)
const temperaturaCelsius = parseFloat(entradaUsuario);

// Verifica se a conversão para número foi bem sucedida
if (isNaN(temperaturaCelsius)) {
  console.log("Valor inválido! Por favor, digite um número.");
} else {
  // Chama a função para converter para Fahrenheit
  const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);

  // Exibe o resultado no console
  console.log(`${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit}°F`);
}
