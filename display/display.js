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

    length() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    display() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.data.toString();
            if (current.next) {
                result += ", ";
            }
            current = current.next;
        }

        return result;
    }
}


const SLL1 = new SLL();
SLL1.addFront(76);
SLL1.addFront(2);
console.log(SLL1.display());
SLL1.addFront(11.41);
console.log(SLL1.display());
