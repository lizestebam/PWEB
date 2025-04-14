

function calculoIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificacaoObesidade(imc) {
    if (imc < 18.5) {
        return "Magreza | Obesidade 0";
    } else if (imc < 24.9) {
        return "Normal | Obesidade 0";
    } else if (imc < 29.9) {
        return "Sobrepeso | Obesidade I";
    } else if (imc < 39.9) {
        return "Obesidade | Obesidade II";
    } else if (imc >= 40) {
        return "Obesidade grave | Obesidade III";
    } else {
        return "Valor inválido";
    }
}
