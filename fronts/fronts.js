//-------------------------------------------

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//-------------------------------------------

// Add Front

class SLL01 {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
}

const SLL1 = new SLL01();
console.log(SLL1.addFront(18));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(73));



console.log("-----")

//-------------------------------------------

// Remove Front


class SLL02 {
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
}


const SLL2 = new SLL02();
SLL2.addFront(18);
SLL2.addFront(5);
SLL2.addFront(73);

console.log(SLL2.removeFront());
console.log(SLL2.removeFront());
console.log(SLL2.removeFront());


console.log("-----")

//-------------------------------------------

// Front

class SLL03 {
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
}


const SLL3 = new SLL03();
SLL3.addFront(18);
console.log(SLL3.front());
SLL3.removeFront();
console.log(SLL3.front());
console.log(SLL3.front());



console.log("-----")

//-------------------------------------------