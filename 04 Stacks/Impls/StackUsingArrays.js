class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    if (!this.data) {
      return null;
    }
    this.data.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("facebook");
myStack.push("linkedin");
myStack.peek();
console.log(myStack.pop());
console.log(myStack.pop());
