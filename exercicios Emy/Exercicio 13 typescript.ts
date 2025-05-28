// Define uma interface chamada Veiculo com dois métodos: acelerar e frear
interface Veiculo {
    acelerar(): void; // Método para acelerar o veículo
    frear(): void;    // Método para frear o veículo
}

// Define a classe Carro que implementa a interface Veiculo
class Carro implements Veiculo {
    // Atributo privado que armazena a velocidade atual do carro
    private velocidade: number;

    // Construtor da classe, inicializa a velocidade com 0
    constructor() {
        this.velocidade = 0;
    }

    // Implementa o método acelerar da interface
    acelerar(): void {
        this.velocidade += 10; // Aumenta a velocidade em 10
        console.log(`Carro acelerando. Velocidade atual: ${this.velocidade} km/h`);
    }

    // Implementa o método frear da interface
    frear(): void {
        // Se a velocidade for igual ou maior que 10, reduz 10
        if (this.velocidade >= 10) {
            this.velocidade -= 10;
        } else {
            // Caso contrário, zera a velocidade
            this.velocidade = 0;
        }
        console.log(`Carro freando. Velocidade atual: ${this.velocidade} km/h`);
    }
}

// Cria uma instância da classe Carro
const meuCarro = new Carro();

// Chama o método acelerar duas vezes
meuCarro.acelerar();
meuCarro.acelerar();

// Chama o método frear três vezes para testar redução até zero
meuCarro.frear();
meuCarro.frear();
meuCarro.frear(); // Tenta frear quando a velocidade já está 0
