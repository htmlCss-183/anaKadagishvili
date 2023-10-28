// function submitHandler() {

// }
function calculator (num1,num2, operation) {
    if (operation === "+") {
        console.log(num1 + num2);
    } else if ( operation ==="-") {
        console.log(num1-num2);
    }
    else if (operation === "*") {
        console.log(num1 * num2);
    }
    else if (operation === "%") {
        console.log(num1 * num2);
    } else if ( operation ==="/") {
        console.log(num1/num2);
    } else {
        console.log ("sorry i dont know this simbols")
    }
    }
    
    
    
    calculator(5,4, "+")
    calculator(6,4, "/")
    calculator(5,8, "+")
    calculator(57,1, "+")
    calculator(3,4, "-")
    calculator(3,4, "%")
    calculator(5,4, "*")
    
    
    
    