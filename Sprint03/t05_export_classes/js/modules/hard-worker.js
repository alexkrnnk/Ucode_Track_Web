class HardWorker{
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;    
    }

    get age(){
        return this._age;
    }

    get salary(){
        return this._salary;
    }

    set age(value){
        if(value < 1 || value > 100){
            this._age = 0;
        }
        else{
            this._age = value;
        }
        
    }

    set salary(value){
        if(value < 100 || value > 10000){
            this._salary = 0;
        }
        else{
            this._salary = value;
        }
    }

    toObject(){
        const worker = {
           name: this.name,
           age: this.age,
           salary: this.salary
        };
        return worker;
    }
}


export { HardWorker };

