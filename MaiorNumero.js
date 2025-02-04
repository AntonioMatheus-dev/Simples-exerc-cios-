console.log('Digite 3 numeros a baixo  e veja qual o maior ');

const numero1=prompt('Digite um numero: ');
const numero2=prompt('Digite um numero: ');
const numero3=prompt('Digite um numero: ');

let maior=numero1;

if(numero2>maior){
    maior=numero2;
}

if(numero3>maior){
    maior=numero3;
}

if(numero1===numero2 && numero2===numero3){
    console.log(`Todos os numeros são iguais a: ${numero1}`);
}

console.log(`O maior numero digitado é: ${maior}`);
