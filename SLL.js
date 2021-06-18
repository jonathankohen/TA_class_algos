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
        if (!this.head) return this;

        let runner = this.head;
        while (runner.next !== null) runner = runner.next;

        runner.next = newNode;
        return this;
    }

    contains(value) {
        if (!this.head) return this;
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

    removeFromBack() {
        if (!this.head) return this;
        let current = this.head;

        while (current.next.next !== null) {
            console.log(current);
            current = current.next;
        }

        current.next = null;
        console.log(`Removed last node in SLL`);
        return this;
    }

    removeFromFront() {
        if (!this.head) return this;
        this.head = this.head.next;
        return this;
    }

    removeNegatives() {
        if (!this.head) return this;

        while (this.head.value < 0) {
            this.head = this.head.next;
        }

        let runner = this.head;

        while (runner.next != null) {
            if (runner.next.value < 0) {
                // leap-frog to remove
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }

        return this;
    }

    secondToLast() {
        if (!this.head) return this;
        let runner = this.head;
        while (runner.next.next != null) runner = runner.next;
        console.log(`Second to last value: ${runner.value}`);
        return this;
    }
}

let sll = new SLL();
sll.addToFront(5)
    .addToBack(8)
    .addToBack(-1)
    .removeNegatives()
    .addToFront(7)
    .addToBack(9)
    .secondToLast()
    .display();
