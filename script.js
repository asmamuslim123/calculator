function calculate(){
    const firstNumber = parseFloat(document.getElementById("firstNumber").value)
    const secondNumber = parseFloat(document.getElementById("secondNumber").value)
    const operator = document.getElementById("operator").value
    
    let result;
    if(operator === "addition"){
        result = firstNumber + secondNumber;
    } else if(operator === "subtraction"){
        result = firstNumber - secondNumber;
    } else if(operator === "multiplication"){
        result = firstNumber * secondNumber;
    } else if(operator === "division"){
        result = firstNumber / secondNumber;
    } else {
        alert("Please select a valid operator");
    }
    
    document.getElementById("result").innerText = "result:" + result;

    

}