class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);

        if(!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;

        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;

        let current = this.head;
        while(current.next !== this.tail) {
            current = current.next;
        }

        const removedItem = current.next;
        current.next = null;
        this.tail = current;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return removedItem;
    }

    shift() {
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = this.head.next;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return currentHead;
    }

    unshift(val) {
        const node = new Node(val);

        if(!this.head) {
            this.tail = node;
        }

        node.next = this.head;
        this.head = node;
        this.length++;

        return this;
    }

    get(index) {
        if(index < 0 || index > this.length - 1) {
            return null;
        }

        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    set(index, val) {
        const node = this.get(index);
        if(!node) return false;
        
        node.val = val;
        
        return true;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;

        if(index === 0) {
            this.unshift(val);
            return true;
        }

        if(index === this.length) {
            this.push(val);
            return true;
        }

        const newNode = new Node(val);
        const previousNode = this.get(index - 1);
        const forwardNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = forwardNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length - 1) return undefined;

        if(index === 0) return this.shift();
        if(index === this.length) return this.pop();

        const previousNode = this.get(index -1);
        const removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;

        return removedNode;
    }

    reverse() {
        let list = new SinglyLinkedList();
        let current = this.head;
        while(current) {
            list.unshift(current.val);
            current = current.next;
        }
        this.head = list.head;
        this.tail = list.tail;
        this.length = list.length;
    }

    print() {
        const arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
console.log(list);
console.log('Pop an item ',list.pop());
console.log(list);
console.log('Shift an item', list.shift());
console.log(list);
console.log('Unshift an item ', list.unshift(123));
console.log(list);
console.log('Get item with index is 0', list.get(0));
console.log('Get item with index is 100', list.get(100));
console.log('Get item with index is 2', list.get(2));
console.log('Set value at index 1', list.set(1, 98765));
console.log('Set value at index 1000', list.set(1000, 222));
console.log(list);
console.log('Insert into index 2', list.insert(2, '!'));
console.log(list.get(1));
console.log(list.get(2));
console.log('Remove node at index 2', list.remove(2));
list.print();
list.reverse();
list.print();
