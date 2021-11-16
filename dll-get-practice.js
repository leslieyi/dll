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

  get(index) {
    //find a node at a specified index in the list. return the found node.
    //we are going to check if the item is closer to the beginning or the end, head or tails
    //edgecase: check if the index is valid.
    if (index < 0 || index >= this.length) return null; //undefined
    let count, current;
    if (index <= this.length / 2) {
      //   console.log("working from start");
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      //   console.log("working from end");
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }


}
