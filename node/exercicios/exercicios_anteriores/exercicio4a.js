function parte1(){
    for (let i=1; i <= 10; i++){
        console.log("primeira parte: " + i);
    }
}

setTimeout(parte1,2000);
const fs = require('fs');
fs.readFile('./node/exercicios/file.txt', (err,data) => {
    if(err)throw err;
    const registros = data.toString().split('\n');
    registros.forEach((registro,index) => {
        console.log('Segunda parte: ' + registro);
    });
});