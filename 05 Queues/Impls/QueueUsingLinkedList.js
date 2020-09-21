class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newItem = new Node(value);
    if (this.length == 0) {
      this.first = this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.enqueue("google");
myStack.enqueue("facebook");
myStack.enqueue("linkedin");
console.log(myStack.dequeue());
console.log(myStack.dequeue());
console.log(myStack.dequeue());
