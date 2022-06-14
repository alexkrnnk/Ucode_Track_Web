let submit = document.getElementById("submit");


submit.addEventListener("click", showData);

function showData(e) {
    let newDiv = document.getElementById("msg");

    let name = document.getElementById("name");
    let mail = document.getElementById("mail");
    let age = document.getElementById("age");
    let descr = document.getElementById("descr");
    let photo = document.getElementById("photo");

    newDiv.innerHTML = `<div class = "output"><h3 style = "margin-left: 50px">POST
        <br>Array <br> { <p style = "margin-left: 30px">[name] => ${name.value} </p> 
                        <p style = "margin-left: 30px">[email] => ${mail.value} </p> 
                        <p style = "margin-left: 30px">[age] => ${age.value} </p> 
                        <p style = "margin-left: 30px">[descr] => ${descr.value} </p> 
                        <p style = "margin-left: 30px">[photo] => ${photo.value} </p> <br> }  </h3></div>`;
}

