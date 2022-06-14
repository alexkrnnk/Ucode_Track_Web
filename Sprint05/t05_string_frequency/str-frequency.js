module.exports = class StrFrequency{
    constructor(str){
        this.str = str;
    }

    letterFrequencies(){
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let arr = new Array;
        for(let i = 0; i < alphabet.length; i++) {
            let counter = 0;
            for(let j = 0; j < this.str.length; j++)
                if(this.str[j].toUpperCase() === alphabet[i]) {
                    counter++;
                }
            if(counter > 0) {
                arr[alphabet[i]] = counter;
            }
        }
        return arr;
    }

    wordFrequencies(){
        var words = this.str.replace(/[.]/g, '').split(/\s/);
        var freqMap = {};
        words.forEach(function(w) {
            if (!freqMap[w]) {
                freqMap[w] = 0;
            }
            freqMap[w] += 1;
        });
    
        return freqMap;
    }

    reverseString(){
        let splitString = this.str.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray;
    }
}

