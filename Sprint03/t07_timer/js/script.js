class Timer{
    constructor(title, delay, stopCount){
       this.title = title;
       this.delay = delay;
       this.stopCount = stopCount;
    }

    start(){
        console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`)
        this.timer = setInterval(() => this.tick(), this.delay)
    }

    tick = () =>{
        this.stopCount -= 1;
        console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount}`);
        if(this.stopCount === 0){
            this.stop();
        }
    }

    stop = ()=> {
        clearInterval(this.timer);
        console.log(`Timer ${this.title} stopped`);
    }
    
    // runTimer(id, delay, counter){
        
    // }

}

function runTimer(id, delay, counter){
    new Timer(id, delay, counter).start();
}

runTimer("Bleep", 1000, 5);

