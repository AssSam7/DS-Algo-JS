class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Append to the linked list
  append(value) {
    /* Old Approach using object */

    // const newNode = {
    //   value: value,
    //   next: null,
    // };
    /* New Approach using Node class */
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Prepend to the linked list
  prepend(value) {
    /* Old Approach using object */

    // const newNode = {
    //   value: value,
    //   next: null,
    // };
    /* New Approach using Node class */
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Insert the value at a specified index
  insert(index, value) {
    // Check the arguments
    if (index >= this.length) {
      return this.append(value);
    }
    if (index == 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    // To get the leading node i.e. the node before current inserting element
    const leaderNode = this.traverseToIndex(index - 1);
    const holdingPointer = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.traverseList();
  }

  // Remove a value at a specified index
  remove(index) {
    // Check the arguments
    if (index > this.length) {
      return;
    }
    let leaderNode = null;
    if (index == 0) {
      let unwantedNode = this.traverseToIndex(index);
      const tailerNode = unwantedNode.next;
      unwantedNode.next = null;
      this.head = tailerNode;
      this.length--;
      return this.traverseList();
    } else if (index == this.length - 1) {
      leaderNode = this.traverseToIndex(index - 1);
      leaderNode.next = null;
      this.tail = leaderNode;
      this.length--;
      return this.traverseList();
    } else {
      const leaderNode = this.traverseToIndex(index - 1);
      const unwantedNode = leaderNode.next;
      const tailerNode = unwantedNode.next;
      leaderNode.next = tailerNode;

      unwantedNode.next = null;

      this.length--;
      return this.traverseList();
    }
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // Traversal through the linked list and print in the form of an array
  traverseList() {
    let linkedListArr = [];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      linkedListArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    // while (currentNode !== null) {
    //   linkedListArr.push(currentNode.value);
    //   currentNode = currentNode.next;
    // }
    return linkedListArr;
  }

  // Reverse a linked list
  reverse() {
    if (!this.head.next) return this.head;
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;

    return this;
  }
}

// Linked List: 10 --> 5 --> 16
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.prepend(2);
// myLinkedList.insert(2, 15);
// myLinkedList.insert(0, 99);
// console.log(myLinkedList.remove(1));
// console.log(myLinkedList.traverseList());
console.log(myLinkedList.reverse());
