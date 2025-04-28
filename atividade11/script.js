// criando objeto usando Object()
const funcionario1 = new Object();
funcionario1.matricula = "1234";
funcionario1.nome = "Munari";
funcionario1.funcao = "Professor";

console.log(`Nome=${funcionario1.nome} Matricula=${funcionario1.matricula} Funcao=${funcionario1.funcao}`);

// construtor
function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
    this.getMatricula = function(){
        return matricula;
    }
    this.getNome = function(){
        return nome;
    }
    this.getFuncao = function(){
        return funcao;
    }
}

let funcionario2 = new Funcionario('1234','Dimas','Professor');
console.log(`Nome=${funcionario2.nome} Matricula=${funcionario2.matricula} Funcao=${funcionario2.funcao}`);

//literal

let funcionario3 = {
    matricula: "654321",
    nome: "Maria Angelica",
    funcao: "Professor"
}
console.log(`Nome=${funcionario3.nome} Matricula=${funcionario3.matricula} Funcao=${funcionario3.funcao}`);
