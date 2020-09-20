class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value ? value : null,
      next: null,
    };
    this.tail = this.head;
    this.length = 0;
  }

  // Get element at a particular index
  get(index) {
    if (index < 0 || index > this.length) return;
    return this.traverseToIndex(index).value;
  }

  // Append to the linked list
  append(value) {
    const newNode = new Node(value);
    if (!this.head.value) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }

  // Prepend to the linked list
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head.value) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
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
  traverseList() {}
}

// Linked List: 10 --> 5 --> 16
const myLinkedList = new LinkedList();
myLinkedList.append(10);
myLinkedList.append(5);
myLinkedList.prepend(16);
console.log(myLinkedList.insert(1, 15));
// Get element at index
myLinkedList.get(1);
// console.log(myLinkedList.traverseList());
