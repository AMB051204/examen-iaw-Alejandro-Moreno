//Escribe un programa para tirar dados. El usuario tendrá que decidir entre dados de 6 caras o de 10 caras, así como cuántos quiere tirar. 
//El programa tendrá que comprobar que la introducción de los datos es correcta y mostrará el resultado de cada uno de los dados en pantalla, así como su suma. 
//Un ejemplo del output por terminal sería este:

const pt = require("prompt-sync")({siginit: true})

const tipoDado = pt("Elige un dado de 6 caras o de 10 ");
const cantidad = pt("Dime la cantidad de dados que quieres tirar ");

tirardados(tipoDado, cantidad);


function tirardados (tipoDado, cantidad) {
    if (tipoDado = !6,10) {
        console.log("introduce numeros validos");
        return;
    }

    let resultado = [];
    let suma = 0;

    for (let i = 0; i< cantidad; i++){
        let resultadoDado = Math.floor(Math.random() * tipoDado) + 1;
        resultado.push(resultadoDado);
        suma += resultadoDado;
    }

    console.log("Resultado: " + resultado);
    console.log("Suma total de los dados: " + suma);
}

