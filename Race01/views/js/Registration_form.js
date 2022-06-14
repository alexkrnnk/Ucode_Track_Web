
document.getElementById('Okey').onclick=()=>
{
    var Login = document.getElementById('Login').value;
    // alert(Login);
    var Passwor_1 = document.getElementById('password_1').value;
    // alert(Passwor_1);
    var Passwor_2 = document.getElementById('password_2').value;
    // alert(Passwor_2);

    // if(Login.length < 4)
    // {
    //     document.getElementById('Login').setAttribute('placeholder', 'Password mast be more than 4');
    //     document.querySelector('.login').style.setProperty(`--placeholder`, `red`);
    //     document.getElementById('Login').value = '';
    // }
    // if(Login.length > 16)
    // {
    //     document.getElementById('Login').setAttribute('placeholder', 'Password mast be less than 16 simvols');
    //     document.querySelector('.login').style.setProperty(`--placeholder`, `red`);
    //     document.getElementById('Login').value = '';
    // }
    // if(Passwor_1.length < 8)
    // {
    //     document.getElementById('password_1').setAttribute('placeholder', 'Password mast be more 8 simvols');
    //     document.querySelector('.login1').style.setProperty(`--placeholder`, `red`);
    //     document.getElementById('password_1').value = '';
    // }
    if(Passwor_1 !== Passwor_2)
    {
        document.getElementById('password_2').setAttribute('placeholder', 'Passwords do not match');
        document.querySelector('.login2').style.setProperty(`--placeholder`, `red`);
        document.getElementById('password_2').value = '';
    }
}






let a = true;
document.getElementById('Click_1').onclick=()=>
{
    if(a)
    {
        document.getElementById('password_1').setAttribute('type', 'text');
        document.getElementById('Icon_Enter_form_1').setAttribute('src', '../img/Close_eye.png');
        a = false;
    }
    else
    {
        a = true;
        document.getElementById('password_1').setAttribute('type', 'password');
        document.getElementById('Icon_Enter_form_1').setAttribute('src', '../img/eye.png');
    }


}
let b = true;
document.getElementById('Click_2').onclick=()=>
{
    if(b)
    {
        document.getElementById('password_2').setAttribute('type', 'text');
        document.getElementById('Icon_Enter_form_2').setAttribute('src', '../img/Close_eye.png');
        b = false;
    }
    else
    {
        b = true;
        document.getElementById('password_2').setAttribute('type', 'password');
        document.getElementById('Icon_Enter_form_2').setAttribute('src', '../img/eye.png');
    }


}
