// 1
function Retangulo(base, altura){
    this.base = base;
    this.altura = altura;
    this.calcularArea = function(){
        return this.base * this.altura;
    }
}
let base = parseFloat(prompt("Informe a base do retângulo:"));
let altura = parseFloat(prompt("Informe a altura do retângulo:"));
let retangulo = new Retangulo(base, altura);
alert(`A área do retângulo é ${retangulo.calcularArea()}`);

// 2
class Conta {
    constructor(nome, correntista, banco, numeroConta, saldo) {
      this.nome = nome;
      this.correntista = correntista;
      this.banco = banco;
      this.numeroConta = numeroConta;
      this.saldo = saldo;
    }
    getSaldo() {
      return this.saldo;
    }
    setSaldo(valor) {
      this.saldo = valor;
    }
    exibirInformacoes() {
      return `Nome: ${this.nome}, Correntista: ${this.correntista}, Banco: ${this.banco}, Número da Conta: ${this.numeroConta}, Saldo: R$ ${this.saldo}`;
    }
  }
  
class Corrente extends Conta {
constructor(nome, correntista, banco, numeroConta, saldo, saldoEspecial) {
    super(nome, correntista, banco, numeroConta, saldo);
    this.saldoEspecial = saldoEspecial;
}
getSaldoEspecial() {
    return this.saldoEspecial;
}
setSaldoEspecial(valor) {
    this.saldoEspecial = valor;
}
exibirInformacoes() {
    return `${super.exibirInformacoes()}, Saldo Especial: R$ ${this.saldoEspecial}`;
}
}

class Poupanca extends Conta {
constructor(nome, correntista, banco, numeroConta, saldo, juros, dataVencimento) {
    super(nome, correntista, banco, numeroConta, saldo);
    this.juros = juros;
    this.dataVencimento = dataVencimento;
}
getJuros() {
    return this.juros;
}
setJuros(valor) {
    this.juros = valor;
}
getDataVencimento() {
    return this.dataVencimento;
}
setDataVencimento(data) {
    this.dataVencimento = data;
}

exibirInformacoes() {
    return `${super.exibirInformacoes()}, Juros: ${this.juros}%, Data de Vencimento: ${this.dataVencimento}`;
}
}

let nome = prompt("Informe o nome da 1 conta:")
let correntista = prompt("Informe o correntista:")
let banco = prompt("Informe o banco:")
let numConta = prompt("Informe o numero da conta:")
let saldo = parseFloat(prompt("Informe o saldo da conta:"));
let saldoEspecial = parseFloat(prompt("Informe o saldo especial da conta:"));

const contaCorrente = new Corrente(nome, correntista, banco, numConta, saldo, saldoEspecial);

let nome2 = prompt("Informe o nome da 2 conta:")
let correntista2 = prompt("Informe o correntista:")
let banco2 = prompt("Informe o banco:")
let numConta2 = prompt("Informe o numero da conta:")
let saldo2 = parseFloat(prompt("Informe o saldo da conta:"));
let taxaJuros = parseFloat(prompt("Informe a taxa de juros:"))
let data = prompt("Informe a data de vencimento:")
const contaPoupanca = new Poupanca(nome2, correntista2, banco2, numConta2, saldo2, taxaJuros, data);

alert(contaCorrente.exibirInformacoes());
alert(contaPoupanca.exibirInformacoes());
  