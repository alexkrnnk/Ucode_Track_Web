let fname = String(prompt("Enter a first name!"));
let sname = String(prompt("Enter a second name!"));

let regex = /^[a-z]+$/i;

fcheck = fname.match(regex);
scheck = sname.match(regex);

if(fcheck && scheck){
    fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
    sname = sname.charAt(0).toUpperCase() + sname.slice(1).toLowerCase();

    console.log(`Hey, ${fname} ${sname}`);
    alert(`Hey, ${fname} ${sname}`);
}
else{
    console.log(`Invalid input`);
    alert(`Invalid input`);
}



