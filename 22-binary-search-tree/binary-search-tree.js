class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if(!this.root) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while(true) {
            if(value === current.value) return undefined;

            if(value < current.value) {
                if(current.left === null) {
                    current.left = node;
                    return this;
                } else {
                    current = current.left;
                }
            } else if (value > current.value) {
                if(current.right === null) {
                    current.right = node;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }

    print() {
        console.log(JSON.stringify(this, null, 2));
    }
}

var tree = new BinarySearchTree();
tree.insert(100);
tree.insert(90);
tree.insert(113);
tree.insert(88);
tree.insert(91);
tree.print();

