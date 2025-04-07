let pessoas = [];

function mediaIdade (pessoas){
    let soma = 0
    for (let index =0; index < pessoas.length; index++){
        soma += pessoas[index].idade;
    }
    return soma / pessoas.length;
}

function maiorIdade (pessoas){
    let maiorIdade = 0;
    for (let index = 0; index < pessoas.length; index++){
        if (pessoas[index].idade > maiorIdade){
            maiorIdade = pessoas[index].idade;
        }
    }
    return maiorIdade;
}

function menorIdade (pessoas){
    let menorIdade = pessoas[0].idade;
    for (let index = 0; index < pessoas.length; index++){
        if (pessoas[index].idade < menorIdade){
            menorIdade = pessoas[index].idade;
        }
    }
    return menorIdade;
}

function qtdPessimo (pessoas){
    let qtd = 0;
    for (let index = 0; index < pessoas.length; index++) {
        if(pessoas[index].opiniao==1){
            qtd += 1;
        }
    }
    return qtd;
}

function porcenOtmBom(pessoas){
    let qtd = 0;
    for (let index = 0; index < pessoas.length; index++) {
        if(pessoas[index].opiniao==4 || pessoas[index].opiniao==3){
            qtd += 1;
        }
    }
    return (qtd*100)/pessoas.length;
}

function qtdF(pessoas){
    let f = 0;
    for (let index = 0; index < pessoas.length; index++) {
        if(pessoas[index].sexo == "F" ||pessoas[index].sexo == "f")
            f += 1;
    }
    return f;
}

function qtdM(pessoas){
    let m = 0;
    for (let index = 0; index < pessoas.length; index++) {
        if(pessoas[index].sexo == "M" ||pessoas[index].sexo == "m")
            m += 1;
    }
    return m;
}

function qtdO(pessoas){
    let o = 0;
    for (let index = 0; index < pessoas.length; index++) {
        if(pessoas[index].sexo == "O" ||pessoas[index].sexo == "o")
            0 += 1;
    }
    return o;
}

for (let index = 0; index <3; index++) {
    const idade = parseInt(prompt("informe sua idade:"));
    const sexo = prompt("Informe o sexo (M/F/O)");
    const opiniao = parseInt(prompt("Informa sua opinião, sendo 4=ótimo, 3=bom, 2=regular, 1=péssimo."))
    const pessoa = {
        idade: idade,
        sexo: sexo,
        opiniao: opiniao
    };
    pessoas.push(pessoa)
}

const resultadoMediaIdade = mediaIdade(pessoas);
const resultadoMaiorIdade = maiorIdade(pessoas);
const resultadoMenorIdade = menorIdade(pessoas);
const resultadoPessimo = qtdPessimo(pessoas);
const resultadoPorcentagem = porcenOtmBom(pessoas);
const qtdHom = qtdM(pessoas);
const qtdMul = qtdF(pessoas);
const qtdOut = qtdO(pessoas);
alert(`Resultado da pesquisa:\n\
    A média da idade das pessoas é: ${resultadoMediaIdade}\n\
    A maior idade é: ${resultadoMaiorIdade}\n\
    A menor idade é: ${resultadoMenorIdade}\n\
    A quantidade de péssimos é: ${resultadoPessimo}\n\
    A porcentagem de bom e ótimo é: ${resultadoPorcentagem}\n\
    O número de mulheres que responderam é: ${qtdMul}\n\
    O número de homens que responderam é: ${qtdHom}\n\
    O número de outros que responderam é: ${qtdOut}`);

