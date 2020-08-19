class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Append to the linked list
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Prepend to the linked list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    const followerNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = followerNode;
    newNode.prev = leaderNode;
    followerNode.prev = newNode;
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
      tailerNode.prev = null;
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
      unwantedNode.prev = null;
      unwantedNode.next = null;
      tailerNode.prev = null;
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
}

// Linked List: 10 --> 5 --> 16
const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(2);
myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.insert(1, 1);
// myLinkedList.insert(0, 99);
console.log(myLinkedList.remove(3));
// console.log(myLinkedList.traverseList());
