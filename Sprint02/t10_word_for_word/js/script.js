let cleanArr = (x) => {
    let arr = []
    for (let i = 0; i < x.length; i++) {
        if (x[i]) {
            arr.push(x[i])
        }
    }
    let secarr = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (!~secarr.indexOf(current)) {
            secarr.push(current)
        }
    }
    return secarr
}


function addWords (obj, wrds){
    let arr = obj["words"];

    arr = arr + ' ' + wrds;

    arr = arr.split(' ');

    arr = cleanArr(arr);

    obj["words"] = arr.join(' ');

}

function removeWords(obj, wrds){
    let remove = obj["words"];

    remove = remove.split(' ');

    remove = cleanArr(remove);

    let rems = cleanArr(wrds.split(" "));

    for (let i = 0; i < rems.length; i++) {
        let elem = rems[i];
        let index = remove.indexOf(elem);

        if (index > -1) 
            remove.splice(index, i);        
    }

    obj["words"] = remove.join(" ")
}

function changeWords (obj, oldWrds, newWrds){
    let changeArr = Object.values(obj)

    changeArr = String(changeArr)

    changeArr = changeArr.split(' ')

    changeArr = cleanArr(changeArr)

    let news = cleanArr(newWrds.split(' '))

    let olds = cleanArr(oldWrds.split(' '))

    changeArr = news;

    for (let i = 0; i < olds.length; i++) {
        let elem = olds[i]
        let index = changeArr.indexOf(elem)
        if (index > -1) {
            changeArr.splice(index, i)
        }
    }
    obj["words"] = changeArr.join(' ')
    return obj
}


