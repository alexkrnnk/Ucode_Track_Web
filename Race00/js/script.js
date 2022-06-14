const calc = document.querySelector(".container");
let result = document.getElementById("result");
console.log(result);
let p = document.getElementById("zeroStart");
let count_plius_min = 0;
let equalBtnISClickded = false;

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }

calc.addEventListener("click", function(event) {
    p.style.visibility = "hidden";
    if(!event.target.classList.contains("btn")) return;
    let value = event.target.innerText;
    console.log(value);

    switch(value) {


        case "!":
            if(result.innerText < 11){
                result.innerText = factorialize(result.innerText);
                eval(result.innerText); 
            } 
            else{
                result.innerText = "Too Big Number";
                eval(result.innerText); 
            }
           
            break;
        case "^":
            result.innerText = Math.pow(result.innerText, 2);
            eval(result.innerText);
            break;
        case "√":
            if(result.innerText % 3 === 0){
                result.innerText = Math.sqrt(result.innerText);
                eval(result.innerText); 
            }
            else{
                result.innerText = Math.sqrt(result.innerText).toFixed(2);
                eval(result.innerText); 
            }
            break;
        case '+/-':
            if(count_plius_min == 0) {
                result.innerText += "-";
                count_plius_min = 1;
            }
            else {
                result.innerText += "+";
                count_plius_min = 0;
            }
            break;
        case "C":
            result.innerText = "";
            break;
        case "%":
            result.innerText = eval(result.innerText / 100);
            break;
        case "=":
            equalBtnISClickded = true;
            try{
                result.innerText = eval(result.innerText);
            } catch {
                result.innerText = "Error"
            }
            break;
        default:
            if(result.innerText.length >= 7) { // лимит на ввод чисел
                if(equalBtnISClickded == false) {
                    alert("Stop inserting too much numbers!!!")
                    result.innerText = result.innerText.slice(0, -2);
                }
            }
            if(value == "x") {
                value = "*";
            }
            
            result.innerText += value;
            break;
    }

});