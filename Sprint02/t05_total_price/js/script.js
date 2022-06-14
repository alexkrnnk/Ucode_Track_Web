function total(addCount, addPrice, currentTotal) {
    if(Number.isNaN(currentTotal) || currentTotal === undefined){
        currentTotal = 0; 
    }

    if(addCount === 0){
        return currentTotal;
    }
    else{
        currentTotal += addCount * addPrice;
    }

    return currentTotal; 
}

