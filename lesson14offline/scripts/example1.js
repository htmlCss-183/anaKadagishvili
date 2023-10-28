function submitHandler() {
    var inputDataFromUser = document.getElementById ("inputData").value;
    var result = document.getElementById("result")
    
result.style.color = "purple";
result.innerHTML = inputDataFromUser;
} 

