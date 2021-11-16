class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      /*if list is empty*/
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail; /* 99 -> 100 99 <-100*/
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //reverse all the nodes in the list, return the list
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    while (current) {
      let next = current.next;
      let prev = current.prev;
      current.next = prev;
      current.prev = next;
      current = next;
    }
    return this;
  }
}
