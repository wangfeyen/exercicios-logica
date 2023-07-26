//console.log("Olá mundo");

//exercício 2:
//const prompt = require ("prompt-sync")();
//var nome = prompt("Digite seu nome: ");
//console.log("O nome é:",nome)

//exercício 3:
//const prompt = require ("prompt-sync")();
//var num1 = parseFloat(prompt("Insira o primeiro número: "));
//var num2 = parseFloat(prompt ("Insira o segundo número: "));
//console.log(num1+num2)

//exercício 4:
//const prompt = require ("prompt-sync")();
//var idade = parseFloat(prompt("Digite sua idade: "));
//if(idade >= 18){
//    console.log("Você é de maior");
//} else{
//    console.log("Você é de menor");
//}

//exercício 5:
//const prompt = require("prompt-sync")()
//var num = parseFloat(prompt("Digite o número a ser analisado: "));
//if(num%2===0){
//    console.log("Esse número é par!")
//}else{
//    console.log("Esse número é ímpar!")
//}

//exercício 6:
const prompt=require("prompt-sync")();
var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo: "));
var num3 = parseFloat(prompt("Digite o terceiro: "));
console.log("Resultado: ",(num1+num2+num3)/3)