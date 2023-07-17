//Problem 01

class Calculator {
    constructor(a, b) {
      this.a = parseInt(a);
      this.b = parseInt(b);
    }
  
    addition() {
      return this.a + this.b;
    }
  
    substraction() {
      return this.a - this.b;
    }
  
    multiplication() {
      return this.a * this.b;
    }
  
    division() {
      if (this.b !== 0) {
        return this.a / this.b;
      } else {
        return "Error: Zero is not allowed.";
      }
    }
  } 

   a = prompt("Enter the value of a")
   b = prompt("Enter the value of b")

  const calc = new Calculator(a, b);
  
  operation = prompt("Enter the type of operation (+, -, *, /): ");
  
  
  let result;
  switch (operation) {
    case "+":
      result = calc.addition();
      break;
    case "-":
      result = calc.substraction();
      break;
    case "*":
      result = calc.multiplication();
      break;
    case "/":
      result = calc.division();
      break;
    default:
      result = "Error: Invalid operation entered.";
  }
  
  console.log("Result:", result);