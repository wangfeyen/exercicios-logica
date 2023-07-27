//Exercício 12:Escreva um programa que receba uma lista de números e retorne o maior e o menor valor
const prompt=require("prompt-sync")();
console.log("Escreva número a número dando enter para cada um. Escreva 'fim' quando terminar a lista")
var num=prompt("  ")
var maior=num;
var menor = num;
for(i=1;num!=="fim";i++){
    var num= prompt("  ");
    if(parseFloat(num)>maior){
        maior=num;
    }
    if(parseFloat(num)<menor){
        menor=num;
    }
}
console.log("O maior número é: ",maior,", e o menor número é: ",menor)