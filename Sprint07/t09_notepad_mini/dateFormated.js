export class FormatDate{
    constructor(timestamp){
        this.date = new Date(timestamp);
    }

    getDate(date){
        let ret =  `${this.date.getFullYear()}-${this.format(this.date.getMonth() + 1)}-${this.format(this.date.getDate())} ${this.format(this.date.getHours())}:${this.format(this.date.getMinutes())}:${this.format(this.date.getSeconds())}`;
        return ret;
    }

    format(number){
        if(number < 10) { return `0${number}`; }

        return number;
    }

}

