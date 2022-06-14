exports.checkDivision = function(start = 1, end = 60){
 
  for(let i = start; i <= end; i++) {
    let res = "The number " + i;
    let check = false;

    if(i % 2 == 0) {
        res += " is divisible by 2";
        check = true;
    }
    if(i % 3 == 0) {
        if(check == true) res += ",";
        res += " is divisible by 3";
        check = true;
    }
    if(i % 10 == 0) {
        if(check == true) res += ",";
        res += " is divisible by 10";
        check = true;
    }
    if(check == false) {
        res += " -";
    }
    console.log(res);
  }
}

