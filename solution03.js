 function generateSeries(input) {
    let output = [];
    let num = 1;
    
    for (let i = 0; i < input; i++) {
      output.push(num);
      num += 2;
    }
    
    return output;
  }

  console.log(generateSeries(1));  
  console.log(generateSeries(2));
  console.log(generateSeries(3));  
  console.log(generateSeries(4));  
  console.log(generateSeries(5)); 
  console.log(generateSeries(6));  
  