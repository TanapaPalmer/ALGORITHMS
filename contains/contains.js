// Contains

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (!this.head) {
            return null;
        }

        const newHead = this.head.next;
        this.head = newHead;
        return this.head;
    }

    front() {
        if (!this.head) {
            return null;
        }

        return this.head.data;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

const SLL1 = new SLL();
SLL1.addFront(2);
SLL1.addFront(4);
SLL1.addFront(6);

console.log(SLL1.contains(2));
console.log(SLL1.contains(4));
console.log(SLL1.contains(6));
console.log(SLL1.contains(10));

//-------------------------------------------