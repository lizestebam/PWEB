let input = prompt("Informe um valor de entrada:\n1-Pedra.\n2-Papel.\n3-Tesoura.")
let randInt = Math.floor(Math.random() * 3) + 1;

if (randInt==input){
    alert("Houve um empate!");
}
else if (input==1&randInt==3){
    alert("Você venceu!");
}
else if (input==1&randInt==2){
    alert("Você perdeu!");
}
else if (input==2&randInt==1){
    alert("Você venceu!");
}
else if (input==2&randInt==3){
    alert("Você perdeu!");
}
else if (input==3&randInt==1){
    alert("Você perdeu!")
}
else if (input==3&randInt==2){
    alert("Você venceu!");
}