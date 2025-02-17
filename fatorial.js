
const numero=prompt('Digite um número: ')


  function nfatorial(n){
    if(n<0){
        return -1
    }else if(n==0){
        return 1
    }else{
        let multiplicação=1                
    for(let i=2; i<=n; i++){
         multiplicação*=i
    }
    return multiplicação
  }}

  console.log(nfatorial(numero))


  //function factorialize(num) {
  //  if (num < 0) 
  //      return -1;
  //  else if (num == 0) 
  //      return 1;
  //  else {
  //      return (num * factorialize(num - 1));
  //  }
  //}
 // console.log(factorialize(5));