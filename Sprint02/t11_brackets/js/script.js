function checkBrackets(str) {
    let left = 0, right = 0, res = 0;

    if(!str){
        return String(-1);
    }
    else{
        for(let i = 0; i < str.length; i++){
            if(str[i] === '('){
                right++;
            }
            else if(str[i] === ')'){
                left++;
                if(right > left){
                    res++;
                    right = 0;
                    left = 0;
                }
            }
        }
        
    }
    

    if(right === 0 && left === 0 && result === 0){
        res = -1;
    }
    else if(left > right){
        res += left - right;
    }

    return String(res);
}

