import promptSync from "prompt-sync"; // importando o pacote do prompt-sync
const prompt = promptSync(); // alocando as funcoes do pacote na variavel prompt

// perguntando ao usuario a nota das provas
// obs: todo dado que vem do prompt é do tipo string
let nota1 = parseFloat(prompt("digite a primeira nota: "));
let nota2 = parseFloat(prompt("digite a segunda nota: "));
let media = (nota1 + nota2) / 2;
console.log (media)
// if else é uma estrutura de decisao
if (media >=7){
    console.log ('aprovado')
}else {
    console.log ("reprovado")
}
