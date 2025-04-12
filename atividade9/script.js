function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function ordemCrescente(num1, num2, num3) {
    return [num1, num2, num3].sort((a, b) => a - b);
}

function ePalindromo(str) {
    const strUpper = str.toUpperCase();
    const strReversa = strUpper.split('').reverse().join('');
    return strUpper === strReversa ? "É um palíndromo" : "Não é um palíndromo";
}


function verificarTriangulo(lado1, lado2, lado3) {
    if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2) {
        if (lado1 === lado2 && lado2 === lado3) {
            return "É um triângulo equilátero!";
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            return "É um triângulo isósceles!";
        } else {
            return "É um triângulo escaleno!";
        }
    } else {
        return "Não é possível formar um triângulo!";
    }
}

