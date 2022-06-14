class Node {
    constructor(value) {
      this.data = value;
      this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // link to the first node in List
        this.length = 0; // length
    }
    count() {
        return this.length;
    }
    clear() {
        this.head = null;
    }
    add(value) {
        let node = new Node(value); 

        if (this.length === 0) {
            this.head = node; 
        } else {
            let current = this.head;
    
            while(current.next) {
                current = current.next;
            }
    
            current.next = new Node(value);
        }
    
        this.length++;
    }
    remove(el) {
        if (this.head.data == el) {
            this.head = this.head.next;
            this.length--;
            return true;
        } 
        else {
            for (let q = this.head; q.next; q = q.next) {
                if (q.next.data == el) {
                    q.next = q.next.next;
                    this.length--;
                    return true;
                }
            }
            return false;
        }
    }
    contains(value) {
        var curr = this.head;
        var str = "";
        while (curr) {
            if (curr.data == value) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
    [Symbol.iterator] = function() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    let value = current.data;
                    current = current.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };
    log() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.data + ", ";
            curr = curr.next;
        }
        console.log(str);
    }
}

function createLinkedList(arr) {
    const listl = new LinkedList();
    arr.forEach(value => listl.add(value));
    return listl;
}

