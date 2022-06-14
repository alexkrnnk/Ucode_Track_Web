let byldchart = document.getElementById("characters").children;

for(let i = 0; i < byldchart.length; i++){
    let byldClass = byldchart[i].getAttribute("class");
    let byldData = byldchart[i].getAttribute("data-element");

    if(byldClass !== "good" && byldClass !== "evil" && byldClass !== "unknown"){
        byldchart[i].setAttribute("class", "unknown");  
    }

    if(!byldData){
        byldchart[i].setAttribute("data-element", "none");  
    }

    let elements = byldchart[i].getAttribute("data-element").split(" ");
    byldchart[i].appendChild(document.createElement("br"));

    for (const val of elements){
        let div = document.createElement("div");
        let line = document.createElement("div");

        if(val !== "none"){
            div.setAttribute("class", `elem ${val}`);
            byldchart[i].appendChild(div);
            
        }
        else{
            div.setAttribute("class", `elem ${val}`);
            line.setAttribute("class",  `line none`);
            div.appendChild(line)
            byldchart[i].appendChild(div);
            
        }
    }
}



