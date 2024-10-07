
const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  

  function findPrimeNumbers(arr){
    let primeNumbers = [];
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=1;j <= arr[i];j++){
            if(arr[i]%j === 0){
                count++;
            }
            
        }
        if(count===2){
            primeNumbers.push(arr[i]);
        }
    }

    return primeNumbers;
  }

  let primeArray = findPrimeNumbers(numbers);
  console.log(primeArray);

 let min = primeArray[0];
 let max = primeArray[0];
 let sum = 0;

 for(let i=0;i<primeArray.length;i++){
    if(min > primeArray[i]){
        min = primeArray[i];
    }
     if(max < primeArray[i]){
        max = primeArray[i];
    }
    sum += primeArray[i];
 }


 console.log('min: ', min);
 console.log('max: ', max);
 console.log('sum:', sum);