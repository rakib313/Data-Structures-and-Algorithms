class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let currentNode = this.root;
        const newNode = new Node(value);
        if (currentNode === null) {
            this.root = newNode;
            return this;
        }
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }
    lookup(value){
        let currentNode = this.root;
        if (currentNode === null) {
            return "Tree is empty.";
        } else {
            while (currentNode !== null) {
                if (currentNode.value === value) {
                    return currentNode;
                } else {
                    if (value < currentNode.value) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
        return "Value not found";
    }
    // remove
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  let t = JSON.stringify(traverse(tree.root))
  console.log(t);
  console.log(tree.lookup(111));

  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }