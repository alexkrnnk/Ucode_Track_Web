const {LLData} = require("./LLData");

module.exports.LList = class LList {
    constructor() {
        this.head = null;
        this.tail = null; 
    }

    getFirst() {
        return this.head.data;
    }

    getLast() {
        console.log(this.head.next);
        return this.head.next;
    }

    removeAll(value) {
        if (!this.head) {
            return null;
          }
        
          let deletedNode = null;
        
          while (this.head && this.head.value === value) {
            deletedNode = this.head;
        
            
            this.head = this.head.next;
          }
        
          let currentNode = this.head;
        
          
          if (currentNode !== null) {
            while (currentNode.next) {
              if (currentNode.next.value === value) {
                deletedNode = currentNode.next;
                
                currentNode.next = currentNode.next.next;
              } else {
                currentNode = currentNode.next;
              }
            }
          }
        
         
          if (this.tail && this.tail.value === value) {
           
            this.tail = currentNode;
          }
        
          return deletedNode;
    }

    count() {
        let current = this.head;
        let count = 0;
        while(current) {
            current = current.next;
            count++;
        }
        return count;
    }

    addFromArray(arrayOfData) {
        arrayOfData.forEach(data => this.add(data));

        return this;
    }

    add(data) {
        const newNode = new LLData(data);
      
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
      
            return this;
        }
      
        this.tail.next = newNode;
        
        this.tail = newNode;
      
        return this;
    }

    toString(){
        let current = this.head;

        while(current){
            console.log(current.data);
            
            current = current.next;
        }
    }

    filter(callback){
        return [...this].filter(callback);
    }

    getIterator() {
        for(let current = this.head; current != null; current = current.next)
            return current.data;
    }
}


