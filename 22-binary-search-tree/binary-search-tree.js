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

    insert(value, root = this.root) {
        const node = new Node(value);

        if(!root) {
            root = node;
            return this;
        }

        if(root.value > node.value) {
            if(root.right) {
                this.insert(value, root.right);
            }
            this.right = node;
        }

        if(root.value < node.value) {
            if(root.left) {
                this.insert(value, root.left);
            }
            this.left = node;
        }

        return this;
    }
}

var tree = new BinarySearchTree();
tree.insert(100);
tree.insert(90);
tree.insert(113);
tree.insert(88);
tree.insert(91);
console.log(tree);

