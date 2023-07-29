// Max/Min/Average

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
        return this;
    }

    removeFront() {
        if (!this.head) {
            return null;
        }

        const newHead = this.head.next;
        this.head = newHead;
        return this;
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

// SList: Max

    max() {
        if (!this.head) {
            return null;
        }

        let maxVal = this.head.data;
        let current = this.head.next;
        while (current) {
            if (current.data > maxVal) {
                maxVal = current.data;
            }
            current = current.next;
        }
        return maxVal;
    }

// SList: Min

    min() {
        if (!this.head) {
            return null;
        }

        let minVal = this.head.data;
        let current = this.head.next;
        while (current) {
            if (current.data < minVal) {
                minVal = current.data;
            }
            current = current.next;
        }
        return minVal;
    }

// SList: Average

    average() {
        if (!this.head) {
            return null;
        }

        let sum = 0;
        let count = 0;
        let current = this.head;
        while (current) {
            sum += current.data;
            count++;
            current = current.next;
        }

        return sum / count;
    }
}

const SLL1 = new SLL();
SLL1.addFront(99).addFront(50).addFront(15).addFront(25);

//-------------------------------------------

// SList: Max

console.log("SList: Max");

console.log(SLL1.max());

console.log("-----")

//-------------------------------------------

// SList: Min

console.log("SList: Min");

console.log(SLL1.min());

console.log("-----")

//-------------------------------------------

// SList: Average

console.log("Average");

console.log(SLL1.average());

console.log("-----")
