let palavra=prompt('Digite uma palavra: ')
const palavracontraria=palavra.split(' ').reverse().join('')
if(palavra===palavracontraria){
console.log(`A palavra: ${palavra}
é um palíndromo`)
}else{
    console.log(`A palavra: ${palavra}
não é um palíndromo`)
}