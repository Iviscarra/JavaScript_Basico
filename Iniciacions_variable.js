var variable;
let variableLet_;

const constante = "hola soy una constante"

var a = 1;
console.log(a);

a = 4;
console.log('a :>> ', a);
console.log('constante :>> ', constante);
//constante = "adios" nos da un error

let b = 3;
console.log('b :>> ', b);
b = 5;
console.log('b :>> ', b);

var variable = "HOLA SOY UNA VARIABLE";

for(var i = 0; i <3; i++){
    var variable ="SOY LA SEGUNDA VARIABLE"
}
console.log('variable :>> ', variable);


let variableLet = "HOLA SOY UNA VARIABLE";
for(let i = 0; i <3; i++){
    let variableLet ="SOY LA SEGUNDA VARIABLE"
}
console.log('variableLet :>> ', variableLet);

//Esto nos dice de que tipo es la variable
console.log(typeof 1 );
console.log(typeof "1" );