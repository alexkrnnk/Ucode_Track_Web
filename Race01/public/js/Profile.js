// Enter_form
let b = true;
document.getElementById('Main_button').onclick=()=>
{

    if(b)
    {
        document.getElementById('Conteiner_buttons').style.visibility = 'visible';
        b = false;
    }
    else
    {
        document.getElementById('Conteiner_buttons').style.visibility = 'hidden';
        b = true;
    }
}
document.getElementById('But1').onclick=()=>
{
    document.getElementById('Main_immage').setAttribute('src', '../img/Ukraine.jpg');
}
document.getElementById('But2').onclick=()=>
{
    document.getElementById('Main_immage').setAttribute('src', '../img/ЗСУ.jpg');
}
document.getElementById('But3').onclick=()=>
{
    document.getElementById('Main_immage').setAttribute('src', '../img/Capitanjpg.jpg');
}
document.getElementById('But4').onclick=()=>
{
    document.getElementById('Main_immage').setAttribute('src', '../img/BanderaFlag.jpg');
}
