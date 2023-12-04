//Escribe un programa que reciba cadenas de texto de los usuarios, las sume en una variable, la imprima por pantalla y compruebe cuántos de los caracteres introducidos no eran vocales. 

const pt = require("prompt-sync")({siginit: true});
let texto = pt ("Escribe un texto");
let vocales = "aeiouAEIOU" ;


let cuentaconsonantes = 0;
for(let i = 0; i < texto.length; i++) {
    for (let n = 0; n < vocales.length; n++) {
        if (texto.charAt(i) !== vocales.charAt(n)) {
            cuentaconsonantes ++
        }
    }
}

if (cuentaconsonantes == 0) {
    console.log("El texto introducido no tiene consonantes");
} else {
    console.log("Tiene " + cuentaconsonantes + " consonantes el texto");
}

console.log ("Adios");