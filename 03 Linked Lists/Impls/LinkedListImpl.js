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
}

// Linked List: 10 --> 5 --> 16
const myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(2));
// console.log(myLinkedList);
