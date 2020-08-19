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
    // Check arguments
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
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(2);
console.log(myLinkedList.insert(2, 15));
console.log(myLinkedList.insert(0, 99));
// console.log(myLinkedList.traverseList());
