import readline from 'readline';

// Cria a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função auxiliar para perguntar ao usuário
const perguntar = (pergunta: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(pergunta, resolve);
  });
};

async function pausar(callback: () => void) {
  rl.question('\nPressione Enter para voltar ao menu...', () => {
    callback();
  });
}

//Exercicio 1 - Soma de dois numeros -------------------------------------------------------------------------------------------------

async function somaDoisNumeros() {
  console.log("================== Excercício 1 ==================");

  const num1 = parseInt(await perguntar("Digite o primeiro número inteiro: "));
  const num2 = parseInt(await perguntar("Digite o segundo número inteiro: "));

  const soma = num1 + num2;

  console.log(`A soma dos dois números é: ${soma}`);

  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 2 - Verificar par ou impar -------------------------------------------------------------------------------------------------

async function parOuImpar() {
  console.log("================== Excercício 2 ==================");

  const entrada = await perguntar("Digite um número inteiro: ");
  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
  } else {
    if (numero % 2 === 0) {
      console.log(`O número ${numero} é par.`);
    } else {
      console.log(`O número ${numero} é ímpar.`);
    }
  }

  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 3 - Calcular a média de 3 notas -------------------------------------------------------------------------------------------------

async function calcularMediaNotas() {
  console.log("================== Excercício 3 ==================");

  let n1: number, n2: number, n3: number;

  while (true) {
    n1 = parseFloat(await perguntar("Digite a primeira nota: ")); //parseFloat converte a string para número
    n2 = parseFloat(await perguntar("Digite a segunda nota: "));
    n3 = parseFloat(await perguntar("Digite a terceira nota: "));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) { //isNaN verifica se o valor é um número
      console.log("Por favor, insira valores numéricos válidos.");
    } else {
      break;
    }
  }
  const media = (n1 + n2 + n3) / 3;
  console.log(`A média das notas é: ${media.toFixed(2)}`);

  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 4 - Converter Celsius para Fahrenheit -------------------------------------------------------------------------------------------------

async function conversorTemperatura() {
  console.log("================== Excercício 4 ==================");

  const entrada = await perguntar("Digite a temperatura em graus Celsius: ");
  const celsius = parseFloat(entrada);

  if (isNaN(celsius)) {
    console.log("Valor inválido. Por favor, digite um número.");
    pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter

  }

  const fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
  console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`);

  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 5 - Exibir numeros pares de 1 a 20 -------------------------------------------------------------------------------------------------

function numerosPares(): void {
  console.log("================== Excercício 5 ==================");

  console.log("Números pares entre 1 e 20:");
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 6 - Ler 5 numeros e armazenar em array -------------------------------------------------------------------------------------------------

async function leituraArray(): Promise<void> {
  console.log("================== Excercício 6 ==================");

  const numeros: number[] = [];

  console.log("Digite 5 números inteiros:");

  for (let i = 0; i < 5; i++) {
    const entrada = await perguntar(`Número ${i + 1}: `);
    const numero = parseInt(entrada);

    if (isNaN(numero)) {
      console.log("Valor inválido. Tente novamente.");
      i--; // volta uma posição para repetir a entrada
    } else {
      numeros.push(numero);
    }
  }

  console.log("\nVocê digitou os seguintes números:");
  for (const numero of numeros) {
    console.log(numero);
  }
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 7 - Encontrar maior numero em um array -------------------------------------------------------------------------------------------------

async function encontrarMaiorNumeroUsuario() {
  console.log("================== Excercício 7 ==================");

  const numeros: number[] = [];

  console.log("Digite 5 números inteiros:");

  for (let i = 0; i < 5; i++) {
    const entrada = await perguntar(`Número ${i + 1}: `);
    const numero = parseInt(entrada);

    if (isNaN(numero)) {
      console.log("Entrada inválida. Por favor, digite um número inteiro.");
      i--; // repete a iteração
    } else {
      numeros.push(numero);
    }
  }

  let maior = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  console.log(`O maior número entre os digitados é: ${maior}`);
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 8 - Contar vogais em uma String -------------------------------------------------------------------------------------------------

async function contarVogaisUsuario() {
  console.log("================== Excercício 8 ==================");

  const texto = await perguntar("Digite uma palavra ou frase: ");

  const vogais = "aeiouAEIOU";
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i])) {
      contador++;
    }
  }

  console.log(`A quantidade de vogais é: ${contador}`);
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 9 - Calculadora simples -------------------------------------------------------------------------------------------------
async function calculadoraSimples() {
  console.log("================== Excercício 9 ==================");

  const numero1 = parseFloat(await perguntar("Digite o primeiro número: "));
  const numero2 = parseFloat(await perguntar("Digite o segundo número: "));
  const operacao = (await perguntar("Digite a operação (+, -, *, /): ")).trim();

  let resultado: number;

  switch (operacao) {
    case '+':
      resultado = numero1 + numero2;
      console.log(`Resultado: ${resultado}`);
      break;
    case '-':
      resultado = numero1 - numero2;
      console.log(`Resultado: ${resultado}`);
      break;
    case '*':
      resultado = numero1 * numero2;
      console.log(`Resultado: ${resultado}`);
      break;
    case '/':
      if (numero2 !== 0) {
        resultado = numero1 / numero2;
        console.log(`Resultado: ${resultado}`);
      } else {
        console.log("Erro: Divisão por zero não é permitida.");
      }
      break;
    default:
      console.log("Operação inválida.");
  }
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

// Exercicio 10 - Ordenar Array em ordem crescente -------------------------------------------------------------------------------------------------

async function OrdenarArray() {
  console.log("================== Excercício 10 ==================");

  const numerosInput = await perguntar("Digite números separados por vírgula: ");
  const numerosArray = numerosInput.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

  if (numerosArray.length === 0) {
    console.log("Nenhum número válido foi inserido.");
    return;
  }

  for (let i = 0; i < numerosArray.length; i++) {
    for (let j = 0; j < numerosArray.length - 1; j++) {
      if (numerosArray[j] > numerosArray[j + 1]) {
        // Troca os números de posição
        const temp = numerosArray[j];
        numerosArray[j] = numerosArray[j + 1];
        numerosArray[j + 1] = temp;
      }
    }
  }

  console.log(`Números ordenados: ${numerosArray.join(', ')}`);
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 11 - Classe Pessoa -------------------------------------------------------------------------------------------------

async function executarCriacaoPessoa(): Promise<void> {
  console.log("================== Excercício 11 ==================");

  const nome = await perguntar("Digite o nome da pessoa: ");
  const idadeStr = await perguntar("Digite a idade da pessoa: ");
  const idade = parseInt(idadeStr);

  if (isNaN(idade) || idade < 0) {
    console.log("Idade inválida. Por favor, insira um número inteiro positivo.");
    pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
  }

  const pessoa = new Pessoa(nome, idade);
  pessoa.exibirInformacoes();

  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 12 - Classe Aluno -------------------------------------------------------------------------------------------------

class Pessoa {
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public getNome(): string {
    return this.nome;
  }

  public getIdade(): number {
    return this.idade;
  }

  public exibirInformacoes(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
  }
}

class Aluno extends Pessoa {
  private matricula: string;

  constructor(nome: string, idade: number, matricula: string) {
    super(nome, idade);
    this.matricula = matricula;
  }

  public getMatricula(): string {
    return this.matricula;
  }

  public override exibirInformacoes(): void {
    super.exibirInformacoes();
    console.log(`Matrícula: ${this.matricula}`);
  }
}

async function alunop(): Promise<void> {
  console.log("================== Excercício 12 ==================");

  const nome = await perguntar("Digite o nome do aluno: ");
  const idadeStr = await perguntar("Digite a idade do aluno: ");
  const matricula = await perguntar("Digite a matrícula do aluno: ");

  const idade = parseInt(idadeStr);

  if (isNaN(idade)) {
    console.log("Idade inválida. Tente novamente.");
    return alunop(); // reinicia a função se a idade for inválida
  }

  const aluno = new Aluno(nome, idade, matricula);
  console.log("\nInformações do Aluno:");
  aluno.exibirInformacoes();
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 13 - Classe Carro -------------------------------------------------------------------------------------------------

// Interface Veiculo com dois métodos
interface Veiculo {
  acelerar(): void;
  frear(): void;
}

// Classe Carro implementa a interface Veiculo
class Carro implements Veiculo {
  private velocidade: number;

  constructor() {
    this.velocidade = 0;
  }

  acelerar(): void {
    this.velocidade += 10;
    console.log(`Carro acelerando. Velocidade atual: ${this.velocidade} km/h`);
  }

  frear(): void {
    if (this.velocidade >= 10) {
      this.velocidade -= 10;
    } else {
      this.velocidade = 0;
    }
    console.log(`Carro freando. Velocidade atual: ${this.velocidade} km/h`);
  }
}

// Função principal para rodar o exemplo
async function exemploCarro(): Promise<void> {
  console.log("================== Excercício 13 ==================");

  const nomeCarro = await perguntar("Digite o nome do carro: ");

  console.log(`\nSimulando ações para o carro: ${nomeCarro}`);

  const meuCarro = new Carro();

  meuCarro.acelerar();
  meuCarro.acelerar();
  meuCarro.frear();
  meuCarro.frear();
  meuCarro.frear(); // freando novamente para testar se a velocidade fica 0
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 14 - Tabuada -------------------------------------------------------------------------------------------------

async function tabuadaSimples() {
  console.log("================== Excercício 14 ==================");

  const entrada = await perguntar("Digite um número inteiro: ");
  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
  } else {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 15 - Calculadora de IMC -------------------------------------------------------------------------------------------------

function classificarIMC(imc: number): string {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 24.9) {
    return "Peso normal";
  } else if (imc < 29.9) {
    return "Sobrepeso";
  } else if (imc < 34.9) {
    return "Obesidade grau 1";
  } else if (imc < 39.9) {
    return "Obesidade grau 2";
  } else {
    return "Obesidade grau 3 (obesidade mórbida)";
  }
}
async function classimc() {
  console.log("================== Excercício 15 ==================");

  const pesoInput = await perguntar("Digite seu peso (kg): ");
  const alturaInput = await perguntar("Digite sua altura (m): ");

  const peso = parseFloat(pesoInput);
  const altura = parseFloat(alturaInput);

  const imc = peso / (altura * altura);

  console.log(`Seu IMC é: ${imc.toFixed(2)}`);
  console.log(`Classificação: ${classificarIMC(imc)}`);
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 16 - Validar Senha -------------------------------------------------------------------------------------------------

function validarSenha(senha: string): boolean {
  if (senha.length < 8) return false;

  let temMaiuscula = false;
  let temMinuscula = false;
  let temNumero = false;

  for (const c of senha) {
    if (/[A-Z]/.test(c)) temMaiuscula = true;
    if (/[a-z]/.test(c)) temMinuscula = true;
    if (/[0-9]/.test(c)) temNumero = true;
  }

  return temMaiuscula && temMinuscula && temNumero;
}

// Função que executa o exercício Validador de Senha
async function validarSenhaUsuario(): Promise<void> {
  console.log("================== Excercício 16 ==================");

  const senha = await perguntar("Digite a senha: ");

  if (validarSenha(senha)) {
    console.log("Senha válida!");
  } else {
    console.log(
      "Senha inválida! A senha deve atender aos seguintes critérios:\n" +
      "• Pelo menos 8 caracteres\n" +
      "• Pelo menos uma letra maiúscula\n" +
      "• Pelo menos uma letra minúscula\n" +
      "• Pelo menos um número"
    );
  }
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 17 - Jogo de adivinhação -------------------------------------------------------------------------------------------------

async function jogoAdivinhacao(): Promise<void> {
  console.log("================== Excercício 17 ==================");

  const numeroSorteado = Math.floor(Math.random() * 100) + 1; // de 1 a 100
  let tentativa: number;
  let tentativasFeitas = 0;

  console.log("Tente adivinhar o número entre 1 e 100.");

  do {
    const resposta = await perguntar("Digite sua tentativa: ");
    tentativa = parseInt(resposta);
    tentativasFeitas++;

    if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
      console.log("Por favor, digite um número válido entre 1 e 100.");
      continue;
    }

    if (tentativa < numeroSorteado) {
      console.log("Tente um número MAIOR.");
    } else if (tentativa > numeroSorteado) {
      console.log("Tente um número MENOR.");
    } else {
      console.log(`Parabéns! Você acertou o número em ${tentativasFeitas} tentativa(s).`);
    }
  } while (tentativa !== numeroSorteado);
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

//Exercicio 18 - Contar palavras em uma string -------------------------------------------------------------------------------------------------

async function contadorPalavrasSimples() {
  console.log("================== Excercício 18 ==================");

  const frase = (await perguntar("Digite uma frase: ")).trim();

  if (frase.length === 0) {
    console.log("Nenhuma palavra encontrada.");
  } else {
    const palavras = frase.split(/\s+/);
    console.log(`Número de palavras: ${palavras.length}`);
  }
  pausar(menuPrincipal); // chama a função de pausa e só volta ao menu após Enter
}

// Função principal com menu -------------------------------------------------------------------------------------------------

async function menuPrincipal() {
  console.log("================== Menu da Lista ==================");
  console.log("1 - Soma dois números");
  console.log("2 - Verificar par ou ímpar");
  console.log("3 - Calcular média de três notas");
  console.log("4 - Converter celsius para Fahrenheit");
  console.log("5 - Exibir números pares de 1 a 20");
  console.log("6 - Ler 5 números e armazenar em array");
  console.log("7 - Encontrar maior número em array");
  console.log("8 - Contar vogais em uma string");
  console.log("9 - Calculadora Simples");
  console.log("10 - Ordenar array em ordem crescente");
  console.log("11 - Classe Pessoa");
  console.log("12 - Classe Aluno");
  console.log("13 - Classe Carro");
  console.log("14 - Tabuada");
  console.log("15 - Calculadora de IMC");
  console.log("16 - Validar Senha");
  console.log("17 - Jogo de adivinhação");
  console.log("18 - Contar palavras em uma string");
  console.log("0 - Sair");

  const opcao = await perguntar("Escolha uma opção: ");

  switch (opcao.trim()) {
    case '1':
      await somaDoisNumeros();
      break;
    case '2':
      await parOuImpar();
      break;
    case '3':
      await calcularMediaNotas();
      break;
    case '4':
      await conversorTemperatura();
      break;
    case '5':
      numerosPares();
      break;
    case '6':
      await leituraArray();
      break;
    case '7':
      await encontrarMaiorNumeroUsuario();
      break;
    case '8':
      await contarVogaisUsuario();
      break;
    case '9':
      await calculadoraSimples();
      break;
    case '10':
      await OrdenarArray();
      break;
    case '11':
      await executarCriacaoPessoa();
      break;
    case '12':
      await alunop();
      break;
    case '13':
      await exemploCarro();
      break;
    case '14':
      await tabuadaSimples();
      break;
    case '15':
      await classimc();
      break;
    case '16':
      await validarSenhaUsuario();
      break;
    case '17':
      await jogoAdivinhacao();
      break;
    case '18':
      await contadorPalavrasSimples();
      break;
    case '0':
      console.log("Encerrando o programa...");
      rl.close();
      return;
    default:
      console.log("Opção inválida.");
      menuPrincipal();
  }

  console.log(""); // Linha em branco para separar execuções
}

menuPrincipal(); // Executa o programa
