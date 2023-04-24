//Lista, array o arreglo
const lista=[1,"string",true,undefined,null]
const lista2 = new Array(2,"string",true,undefined,null)
const lista3 = new Array(3)
lista3[0] ="soy el primer elemento, index 0"
const lista4=[lista,lista2,lista3]

console.log('lista :>> ', lista);

console.log('lista2 :>> ', lista2);
console.log('lista3 :>> ', lista3);
console.log('lista4 :>> ', lista4);

//Objetos

const movil={
    altura:10,
    anchura:5,
    marca: "Iphone",
    iswhite:"true",
    contactos:["israel","viscarra","pantigozo"],
    targeta:{
        marca:"Sandisk",
        almacenamiento:"32"
    }
}
movil.anyo=2019;
movil.marca ="Samsung";
console.log(movil.marca);
//Fechas
//Existen librerias que te fcilitan como Moment.js

const ahora =new Date()
console.log('ahora :>> ', ahora);

const fecha_milis = new Date(10);//utilizando los minisegundos
console.log('fecha_milis :>> ', fecha_milis);

const fechacadena = new Date("march 25 2020")
console.log('fechacadena :>> ', fechacadena);
const fechavalorate = new Date(2022,2,15)
console.log('fechavalorate :>> ', fechavalorate);

const dia = ahora.getDate()
const mes = ahora.getMonth()
const anyo = ahora.getFullYear()
console.log(dia, mes, anyo)