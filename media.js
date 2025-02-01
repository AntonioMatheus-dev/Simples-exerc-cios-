   //Media de 3 notas

let nota1=Number(prompt('Digite a primeira nota: '));
let nota2=Number(prompt('Digite a segunda nota: '));
let nota3=Number(prompt('Digite a terceira nota: '));

const soma=nota1+nota2+nota3;
         //parseInt, caso queira
const media=(soma/3);

console.log(`A media das 3 notas é: ${media}`);