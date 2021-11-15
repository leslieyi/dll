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
      /*if list is empty*/ this.head = newNode;
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
    //setting the tail is, oldtail.previous. now set the new tail.next to null. subtract one, and return the val you removed. ALSO remove the other reference, the orginial tail(chop it off, so it's on its own)
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
    console.log(poppedNode);
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
  unshift(val) {
    //make new node, make new node point.next to head. current.prev is newnode.
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode; //updating
    }
    this.length++;
    return this;
  }

  get(){
      
  }
}

list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list);
