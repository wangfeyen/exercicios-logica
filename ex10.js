// exerício 10: Faça um programa que converts graus Celsius para Fahrenheit.
const prompt = require("prompt-sync")();
var celc = parseFloat(prompt("Qual número vai de Celcius para Farenheit: "));
console.log ((celc*9/5)+32);