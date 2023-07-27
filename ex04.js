//exercício 4:
const prompt = require ("prompt-sync")();
var idade = parseFloat(prompt("Digite sua idade: "));
if(idade >= 18){
    console.log("Você é de maior");
} else{
    console.log("Você é de menor");
}