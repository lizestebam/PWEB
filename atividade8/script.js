let pessoas = [];

function mediaIdade(pessoas) {
    if (pessoas.length === 0) return 0;
    let soma = 0;
    for (const pessoa of pessoas) {
        soma += pessoa.idade;
    }
    return soma / pessoas.length;
}

function maiorIdade(pessoas) {
    let maior = 0;
    for (const pessoa of pessoas) {
        if (pessoa.idade > maior) {
            maior = pessoa.idade;
        }
    }
    return maior;
}

function menorIdade(pessoas) {
    if (pessoas.length === 0) return 0;
    let menor = pessoas[0].idade;
    for (const pessoa of pessoas) {
        if (pessoa.idade < menor) {
            menor = pessoa.idade;
        }
    }
    return menor;
}

function qtdPessimo(pessoas) {
    let qtd = 0;
    for (const pessoa of pessoas) {
        if (pessoa.opiniao === 1) {
            qtd += 1;
        }
    }
    return qtd;
}

function porcenOtmBom(pessoas) {
    if (pessoas.length === 0) return 0;
    let qtd = 0;
    for (const pessoa of pessoas) {
        if (pessoa.opiniao === 3 || pessoa.opiniao === 4) {
            qtd += 1;
        }
    }
    return (qtd * 100) / pessoas.length;
}

function qtdF(pessoas) {
    let f = 0;
    for (const pessoa of pessoas) {
        if (pessoa.sexo.toLowerCase() === "f") {
            f += 1;
        }
    }
    return f;
}

function qtdM(pessoas) {
    let m = 0;
    for (const pessoa of pessoas) {
        if (pessoa.sexo.toLowerCase() === "m") {
            m += 1;
        }
    }
    return m;
}

function qtdO(pessoas) {
    let o = 0;
    for (const pessoa of pessoas) {
        if (pessoa.sexo.toLowerCase() === "o") {
            o += 1;
        }
    }
    return o;
}

for (let i = 0; i < 3; i++) {
    const idade = parseInt(prompt("Informe sua idade:"));
    const sexo = prompt("Informe o sexo (M/F/O):");
    const opiniao = parseInt(prompt("Informe sua opinião: 4 = Ótimo, 3 = Bom, 2 = Regular, 1 = Péssimo"));

    const pessoa = {
        idade: idade,
        sexo: sexo,
        opiniao: opiniao
    };
    pessoas.push(pessoa);
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
A média da idade das pessoas é: ${resultadoMediaIdade.toFixed(2)}\n\
A maior idade é: ${resultadoMaiorIdade}\n\
A menor idade é: ${resultadoMenorIdade}\n\
A quantidade de avaliações péssimas é: ${resultadoPessimo}\n\
A porcentagem de "bom" e "ótimo" é: ${resultadoPorcentagem.toFixed(2)}%\n\
O número de mulheres que responderam é: ${qtdMul}\n\
O número de homens que responderam é: ${qtdHom}\n\
O número de pessoas de outro gênero que responderam é: ${qtdOut}`);
