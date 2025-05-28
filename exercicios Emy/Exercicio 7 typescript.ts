// Define uma função que recebe um array de números e retorna o maior número
function encontrarMaiorNumero(numeros: number[]): number {
    // Inicializa a variável 'maior' com o primeiro número do array
    let maior = numeros[0];

    // Percorre o array a partir do segundo elemento
    for (let i = 1; i < numeros.length; i++) {
        // Se o número atual for maior que o armazenado em 'maior', atualiza
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    // Retorna o maior número encontrado
    return maior;
}

// Declara e inicializa um array de números
const numeros: number[] = [10, 25, 3, 99, 56, 78, 2];

// Chama a função para encontrar o maior número e armazena na variável 'maior'
const maior = encontrarMaiorNumero(numeros);

// Imprime o maior número encontrado no console
console.log("O maior número do array é: " + maior);
