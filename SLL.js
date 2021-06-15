class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        return this;
    }

    addToFront(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }

    addToBack(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        return this;
    }

    contains(value) {
        if (!this.head) {
            return undefined;
        } else {
            let current = this.head;
            while (current) {
                if (current.value == value) {
                    console.log(
                        `True, this SLL contains the value ${current.value}.`
                    );
                    return this;
                } else {
                    current = current.next;
                }
            }
            console.log(`False, this SLL does not contain the value ${value}.`);
            return this;
        }
    }

    removeFromBack() {
        if (!this.head) {
            return undefined;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
                console.log(current);
                current = current.next;
            }
            current.next = null;
            console.log(`Removed last node in SLL`);
            return this;
        }
    }

    removeFromFront() {
        if (!this.head) {
            return undefined;
        } else {
            this.head = this.head.next;
            return this;
        }
    }
}

let sll = new SLL();
sll.addToFront(5).addToBack(8).addToBack(9).display();
