const prompt = require("prompt-sync")();
var nome = prompt("Nome para saber se é um palindromo: ")
//console.log(nome[0])
var palindromo=true;
for(i=0;i<nome.length;i++){
    console.log(nome[i],nome[nome.length-i-1])
    if((nome[i])!==(nome[nome.length-i-1])){
        palindromo=false
    }
}
if (palindromo===true){
    console.log("é palíndromo")
}else{
    console.log("não é palíndromo")
}