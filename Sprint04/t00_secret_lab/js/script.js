let click = -1;

function transformation(){
    click += 1;
    
    let byldLab = document.getElementById("lab");
    let byldHero = document.getElementById("hero");

    if(click % 2 === 0){
        byldLab.style.background = "#ffb300";
        byldHero.style.fontSize = "60px";
        byldHero.style.letterSpacing = "2px";
        byldHero.innerHTML = "Bruce Banner";
    }
    else{
        byldLab.style.background = "#70964b";
        byldHero.style.fontSize = "130px";
        byldHero.style.letterSpacing = "6px";
        byldHero.innerHTML = "HULK";
    }
}

transformation();
