const prompt = require("prompt-sync")()
var num = parseFloat(prompt("Número para a verificação: "))
var prim = true
for(var i = 2;i<num;i++){
    if(num%i===0){
        prim=false
    }
}
if (prim===false){
    console.log("não é primo")
}else{
    console.log("É primo!")
}