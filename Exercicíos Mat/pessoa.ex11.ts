// Define a classe Pessoa com os atributos e métodos
class Pessoa {
  // Atributos: nome e idade
  nome: string;
  idade: number;

  // Construtor para inicializar a pessoa com nome e idade
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método para exibir o nome da pessoa
  exibirNome(): void {
    console.log(`Nome: ${this.nome}`);
  }

  // Método para exibir a idade da pessoa
  exibirIdade(): void {
    console.log(`Idade: ${this.idade}`);
  }
}

// Cria um objeto da classe Pessoa com valores fornecidos
const pessoa1 = new Pessoa("Alice", 30);

// Chama os métodos para exibir o nome e a idade
pessoa1.exibirNome();  // Saída: Nome: Alice
pessoa1.exibirIdade(); // Saída: Idade: 30
