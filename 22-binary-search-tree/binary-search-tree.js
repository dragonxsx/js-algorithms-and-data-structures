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

    find(value) {
        if(!this.root) return null;
        
        let current = this.root;
        while(current) {
            if(current.value === value) return current;
            
            if(current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return null;
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
console.log(tree.find(88));
console.log(tree.find(89));
