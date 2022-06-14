// Enter_form
document.getElementById('Enter').onclick=()=>
{
    var Login = document.getElementById('Login').value;
    // alert(Login);
    var Password = document.getElementById('Password_Enter_form').value;
    // alert(Password);
    if(true)
    {
        document.getElementById('Login').setAttribute('placeholder', 'Wrong login');
        document.querySelector('.login_1_1').style.setProperty(`--placeholder`, `red`);
        document.getElementById('Login').value = '';
    }
    if(true)
    {
        document.getElementById('Password_Enter_form').setAttribute('placeholder', 'Wrong password');
        document.querySelector('.login_1_2').style.setProperty(`--placeholder`, `red`);
        document.getElementById('Password_Enter_form').value = '';
    }

}


let a = true;
document.getElementById('Click').onclick=()=>
{
    if( a)
    {
        document.getElementById('Password_Enter_form').setAttribute('type', 'text');
        document.getElementById('Icon_Enter_form').setAttribute('src', '../img/Close_eye.png');
        a = false;
    }
    else
    {
        a = true;
        document.getElementById('Password_Enter_form').setAttribute('type', 'password');
        document.getElementById('Icon_Enter_form').setAttribute('src', '../img/eye.png');
    }
    

};


// Enter_form

