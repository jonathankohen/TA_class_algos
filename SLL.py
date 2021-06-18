class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class SLL:
    def __init__(self):
        self.head = None

    def display(self):
        runner = self.head
        while runner != None:
            print(runner.val)
            runner = runner.next
        return self

    def prepend(self, val):
        newNode = Node(val)
        newNode.next = self.head
        self.head = newNode
        return self

    def append(self, val):
        newNode = Node(val)
        if self.head == None:
            self.head = newNode
        else:
            runner = self.head
            while runner.next != None:
                runner = runner.next
            runner.next = newNode
        return self

    def removeFront(self):
        self.head = self.head.next

    def removeBack(self):
        if self.head == None:
            return self
        elif self.head.next == None:
            self.head = None
            return self
        else:
            runner = self.head
            while runner.next.next != None:
                runner = runner.next
            runner.next = None
            return self

    def is_empty(self):
        if self.head == None:
            return True

    def min_to_front(self):
        if self.head == None:
            print("self.head = None")
            return self
        else:
            min_val = self.head.val
            runner = self.head
            while runner.next != None:
                if runner.next.val < min_val:
                    min_val = runner.next.val
                    node_before_min = runner
                    min_node = runner.next
                runner = runner.next
            node_before_min.next = min_node.next
            min_node.next = self.head
            self.head = min_node
        return self

    def maxToBack(self):
        if self.head == None:
            print("nothing to move fam")
            return self
        else:
            maxval = self.head.val
            runner = self.head
            while runner.next != None:
                if runner.next.val > maxval:
                    maxval = runner.next.val
                    nodeBeforemax = runner
                    maxNode = runner.next
                runner = runner.next
            nodeBeforemax.next = maxNode.next
            runner.next = maxNode
            maxNode.next = None
        return self


newSLL = SLL()
newSLL.append(5).append(6).append(3).append(1).append(12).min_to_front().display()
