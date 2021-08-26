class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);

        if(this.length === 0) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;

        return this;
    }

    pop() {
        if(!this.tail) return undefined;
        
        const removedItem = this.tail;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            // Remove reference
            removedItem.prev = null;
        }

        this.length--;

        return removedItem;
    }

    shift() {
        if(!this.head) return undefined;

        const removedItem = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            // Remove reference
            removedItem.next = null;
        }

        this.length--;

        return removedItem;
    }

    unshift(value) {
        const node = new Node(value);

        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;

        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        if(index <= this.length/2) {
            let current = this.head;
            
            for(let i = 0; i < index; i++) {
                current = current.next;
            }
            
            return current;
        }

        if(index > this.length/2) {
            let current = this.tail;
            
            for(let i = this.length - 1; i > index; i--) {
                current = current.prev;
            }

            return current;
        }

        return null;
    }

    set(index, value) {
        const node = this.get(index);
        if (!node) return false;

        node.val = value;
    }

    insert(index, value) {
        if(index < 0 || index >= this.length) return false;

        if(index === 0) {
            this.unshift(value);
            return true;
        }

        if(index === this.length) {
            this.push(value);
            return true;
        }

        const node = new Node(value);
        const prev = this.get(index - 1);
        const next = prev.next;

        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;

        this.length++;

        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length - 1) return undefined;

        if(index === 0) return !!this.shift();
        if(index === this.length) return !!this.pop();

        const removedItem = this.get(index);
        const prev = removedItem.prev;
        const next = removedItem.next;

        prev.next = next;
        next.prev = prev;
        removedItem.prev = null;
        removedItem.next = null;

        this.length--;

        return removedItem;
    }

    print() {
        var arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

const list = new DoublyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.push(600);
list.push(700);
list.pop();
list.print();
list.shift();
list.print();
list.unshift(123);
list.print();
console.log(list.set(2, 'Blabla'));
list.print();
console.log(list.get(2));
console.log(list.get(5));
console.log(list.insert(2, 'Hi'));
list.print();
console.log(list.remove(2));
list.print();