'use strict'

var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var resultado = `La suma de ${numero1} + ${numero2} = ${numero1+numero2}`;
console.log(resultado);
// console.log(params);
console.log('Hola mundo desde aqui');