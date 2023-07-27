//exercício 5: ímpar ou par
const prompt = require("prompt-sync")()
var num = parseFloat(prompt("Digite o número a ser analisado: "));
if(num%2===0){
    console.log("Esse número é par!")
}else{
    console.log("Esse número é ímpar!")
}