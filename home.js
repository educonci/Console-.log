
///nao usei typeof mas lembrei que tu tinha ensinado isso e achei mais facil. 
nome = prompt ("qual seu nome?");
cidade = prompt ("sua cidade?");

console.log(`Meu nome é ${nome}`);
console.log(`A minha cidade é ${cidade}`);

///

let pergunta1 = confirm("voce gosta de viajar?");

let pergunta2 = confirm("voce gosta de programar?");

let pergunta3 = confirm("voce gosta de correr?");


console.log("voce gosta de viajar? resposta:" + (pergunta1 ? "sim" : "não"));
console.log("voce gosta de programar? resposta:" + (pergunta2 ? "sim" : "não"));
console.log("voce gosta de correr? resposta:" + (pergunta3 ? "sim" : "não"));

///

let x = 5;
let y = 10;
let z ;
 
 
z=x
x=y
y=z
 
console.log("Troquei valores x =10", x)
console.log("Troquei valores y =5", y)

///

numero1 = Number (prompt("escolha um numero:"))
numero2 = Number (prompt("escolha outro numero:"))
 
 
console.log(numero1 + numero2)
 
console.log(numero1 * numero2)