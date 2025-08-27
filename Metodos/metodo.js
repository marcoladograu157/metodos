// Criei a classe Carro com as propriedades marca, modelo, ano, cor e velocidade
class Carro {
    marca = "Ford";
    modelo = "Ka";
    ano = 2020;
    cor = "Prata";
    velocidade = 0;
// construtor para inicializar as propriedades do carro
    constructor(novaCor, velocidade, novaMarca) {
        this.marca = novaMarca;
        this.velocidade = velocidade;
        this.cor = novaCor;
    }
// fiz o metodo acelerar para aumentar a velocidade do carro
    acelerar(...args) {
        if (args.length === 0) {
            this.velocidade += 20;
        } else if (args.length === 1 && typeof args[0] === "number") {
            this.velocidade += args[0];
        } else {
            throw new Error("Número inválido de argumentos ou tipo de argumento inválido");
        }
    }
// fiz o metodo frear para diminuir a velocidade do carro
    frear(...args) {
        if (args.length === 0) {
            this.velocidade -= 20;
        } else if (args.length === 1 && typeof args[0] === "number") {
            this.velocidade -= args[0];
        } else {
            throw new Error("Número inválido de argumentos ou tipo de argumento inválido");
        }

        if (this.velocidade < 0) {
            this.velocidade = 0; // para nao ter velocidade negativa
        }
    }
// fiz o metodo marcha  para retornar a marcha dependendo da velocidade
    marcha() {
        if (this.velocidade === 0) {
            return "O carro está parado";
        } else if (this.velocidade > 0 && this.velocidade <= 40) {
            return "O carro está em primeira marcha";
        } else if (this.velocidade > 40 && this.velocidade <= 80) {
            return "O carro está em segunda marcha";
        } else if (this.velocidade > 80 && this.velocidade <= 120) {
            return "O carro está em terceira marcha";
        } else if (this.velocidade > 120 && this.velocidade < 150) {
            return "O carro está em quarta marcha";
        } else if (this.velocidade >= 150 && this.velocidade <= 200) {
            return "O carro está em quinta marcha, última marcha";
        } else {
            return "Velocidade fora do intervalo conhecido";
        }
    }
}
// Testando a classe Carro e seus métodos
const carro1 = new Carro("Vermelho", 10, "Ford");
carro1.acelerar();
carro1.frear();
console.log(carro1);
console.log(carro1);
console.log(carro1.marcha());

const carro2 = new Carro("Azul", 50, "Chevrolet");
carro1.acelerar();
carro1.frear();
console.log(carro1);

const carro3 = new Carro("Preto", 110, "Fiat");
carro3.acelerar();
carro3.frear();
console.log(carro1);

const carro4 = new Carro("Rosa", 130, "Renault");
carro4.acelerar();
carro4.frear();
console.log(carro1);

// Testando os métodos acelerar e frear
carro1.acelerar();

carro2.acelerar();  
carro3.acelerar();
carro4.acelerar();
//  Acelerando com valor específico
carro1.frear();
carro2.frear();
carro3.frear();
carro4.frear();
// Freando com valor específico

console.log(carro2);
console.log(carro2.marcha());
console.log(carro3);
console.log(carro3.marcha());
console.log(carro4);
console.log(carro4.marcha());
