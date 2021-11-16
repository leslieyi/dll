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
  //WRITE POP First
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

  shift() {
    //removes beginning node. find the current head. currenthead.next = Newhead. return the old head.next = null, newHead.prev= null
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null; //removing the relationship 99 -> 199
      oldHead.next = null; // 99 -> null
    }
    this.length--;
    return oldHead;
  }
  //write 1.pop 2.shift 3.get methods first. 
  //remove a node at a specified index in a list, should return the removed node or undefined if the index is invalid. 
  remove(index) {

    if (index < 0 || index >= this.length) return undefined; 
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.previous;

    removed.next = null;
    removed.prev = null;
    this.length--;
    return removedNode;
    // A B C D E F  trying to move C b.next = d
  }
}
