class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
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

  pop() {
    //remove the note at the end of the list. return the removed node.

    if (!this.head) return undefined;
    let poppedNode = this.tail; //popping off
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //1 -> 3 -> 7 (popping 7 off, T is in a var. 3 is a new tail,
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}
