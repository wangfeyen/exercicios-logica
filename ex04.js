//exercício 4: Se é maior ou menor de idade
const prompt = require ("prompt-sync")();
var idade = parseFloat(prompt("Digite sua idade: "));
if(idade >= 18){
    console.log("Você é de maior");
} else{
    console.log("Você é de menor");
}