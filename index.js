const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];

  

  function countEvenNumbers(arr){
    let evenNumbers = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2=== 0){
            evenNumbers++;
        }
    }
    return evenNumbers;
  }

  const evenNumbers = countEvenNumbers(numbers);
  console.log(evenNumbers);

  function countOddNumbers(arr){
    let oddNumbers = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2!== 0){
            oddNumbers++;
        }
    }
    return oddNumbers;
  }

  const oddNumbers = countOddNumbers(numbers);
  console.log(oddNumbers);