let submit = document.getElementById("submit");
let msg = document.getElementById("Message");

let answers = document.getElementsByName('answer');

submit.addEventListener("click", validate);

function validate(e) {
    if(answers[2].checked) 
        msg.innerHTML = "Right!";
    else 
    msg.innerHTML = "Oohh... that's wrong";
}

