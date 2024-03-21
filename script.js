/*
let variavel1 = 0;
variavel1 = "todo mundo em pânico";

const PI = 3.14;

console.log(typeof(variavel1));

PI = 3.15;
*/

/*let var1 = "30";
let var2 = 5;

let resultado1 = var1 - var2;
let resultado2 = var1 + var2;

console.log(var1 / var2);
console.log(var1 * var2);

console.log(resultado1); 
console.log(typeof(resultado1)); 

console.log(resultado2); 
console.log(typeof(resultado2)); 
*/

/*let variavelArray = [5,4,2.00,"hell"];
console.log(variavelArray[5]);
*/

let variavelObjeto = {
    nome: "Valak",
    idade: 1550,
    altura: 2.00,
    cep:"hell",
    endereco: {
        rua:666,
        bairro: {
            numero:3.07
        }
    }
}

if(variavelObjeto.idade >= 18) {
    console.log("Pode entrar no meu corpo");
} else {
    console.log("Saia desse corpo que não te pertence");
}

/*!= diferente
  == igual
  > maior
  < menor
  >= maior ou igual que
  <= menor ou igual que
  */

/*console.log(variavelObjeto.idade.altura);
console.log(variavelObjeto["nome"]);
console.log(variavelArray);
*/
 let meuArray = ["cachorro", "gato", "coelho", "calopsita", "cabra"];

 console.log(meuArray.length)
 
 for(let i = 0 ;i < meuArray.length; i++) {
    console.log(i);
 }


 console.log(meuArray["0"]);
 console.log(meuArray["1"]);
 console.log(meuArray["2"]);
 console.log(meuArray["3"]);
 console.log(meuArray["4"]);