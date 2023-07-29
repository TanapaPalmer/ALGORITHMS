class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }

    // BST: Add
    add(value) {
        if(this.root) {
            var runner = this.root;
            while(runner) {
                if(value>runner.value) {
                    if(runner.right){
                        runner = runner.right;
                    } else {
                        runner.right = new Node(value);
                        return this
                    }
                } else {
                    if(runner.left){
                        runner = runner.left;
                    } else {
                        runner.left = new Node(value);
                        return this
                    }
                }
            }
        }
        this.root = new Node(value);
        return this
    }

    // BST: Add
    contains(value) {
        var runner = this.root;
        while (runner) {
            if (value == runner.value) {
                return true;
            }
            if (value < runner.value) {
                if (!runner.left) {
                    return false;
                }
                runner = runner.left;
            } else {
                if (!runner.right) {
                    return false;
                }
                runner = runner.right;
            }
        }
        return false;
    }

    // BST: Min
    min() {
        var runner = this.root;
        var min = this.root.value;
        while(runner.left) {
            if(runner.left.value < min) {
                min = runner.left.value;
            }
            runner = runner.left;
        }
        return min
    }

    // BST: Max
    max() {
        var runner = this.root;
        var max = this.root.value;
        while(runner.right) {
            if(runner.right.value > max) {
                max = runner.right.value;
            }
            runner = runner.right;
        }
        return max
    }

    // BST: Size
    size() {
        if (this.root === null) {
            return 0;
        }
        function sizeHelp(runner) {
            if (!runner) {
                return 0;
            }
            return 1 + sizeHelp(runner.left) + sizeHelp(runner.right);
        }
        return sizeHelp(this.root);
    }

    // BST: Is Empty
    isEmpty() {
        if(this.root) {
            return false
        }
        return true
    }
}


tree = new BST();

tree.add(10).add(20).add(5).add(7).add(21).add(2).add(9).add(17).add(6).add(4)


console.log(tree.contains(17))
console.log(tree.contains('hello'))
console.log(tree.min())
console.log(tree.max())
console.log(tree.size())
console.log(tree.isEmpty())

emptyTree = new BST();

console.log(emptyTree.isEmpty())
console.log(tree);



// or
// class BTNode {
//     constructor(value) {
//         this.val = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     // BST: Add
//     add(val) {
//         const newNode = new BTNode(val);
//         if (!this.root) {
//             this.root = newNode;
//             return this;
//         }

//         let current = this.root;
//         while (current) {
//             if (val === current.val) {
//                 current.right = newNode;
//                 return this;
//             } else if (val < current.val) {
//                 if (!current.left) {
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if (!current.right) {
//                     current.right = newNode;
//                     return this;
//                 }
//                 current = current.right;
//             }
//         }
//     }

//     // BST: Contains
//     contains(val) {
//         let current = this.root;
//         while (current) {
//             if (val === current.val) {
//                 return true;
//             } else if (val < current.val) {
//                 current = current.left;
//             } else {
//                 current = current.right;
//             }
//         }
//         return false;
//     }

//     // BST: Min
//     min() {
//         let current = this.root;
//         while (current.left) {
//             current = current.left;
//         }
//         return current.val;
//     }

//     // BST: Max
//     max() {
//         let current = this.root;
//         while (current.right) {
//             current = current.right;
//         }
//         return current.val;
//     }

//     // BST: Size
//     size() {
//         function countNodes(node) {
//             if (!node) return 0;
//             return 1 + countNodes(node.left) + countNodes(node.right);
//         }
//         return countNodes(this.root);
//     }

//     // BST: Is Empty
//     isEmpty() {
//         return this.root === null;
//     }
// }