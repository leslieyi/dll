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
  
    get(index) {
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
  
    //unsfhit, push, get method
    insert(index, val) {
      //remove two connections. old previous and old current pointing at the new node.
      //four patches you gotta make.
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.unshift(val); //add to the beginning of, !! turn it into a boolean
      if (index === this.length) return !!this.push(val); //coercing into a boolean
  
      let newNode = new Node(val);
      let beforeNode = this.get(index - 1);
      let afterNode = beforeNode.next;
  
      (beforeNode.next = newNode), (newNode.prev = beforeNode);
      (newNode.next = afterNode), (afterNode.prev = newNode);
  
      this.length++;
      return true;
    } //A B C Hello D E F
  
    remove(index) {
      //use get method. check if index is valid, if index is 0, shift! if index = length-1 use pop.
      //other wise get method to remove.
      //set the next and prev to null on the found node.  PATCH two places
      if (index < 0 || index >= this.length) return undefined; //if we are removing, it needs to be equal
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
  
      let removedNode = this.get(index);
      let beforeNode = removedNode.prev; 
      let afterNode = removedNode.next; 
  
      beforeNode.next = afterNode; 
      afterNode.prev = beforeNode
      // removedNode.prev.next = removedNode.next;
      // removedNode.next.prev = removedNode.previous;
  
      removed.next = null;
      removed.prev = null;
      this.length--;
      return removedNode;
      // A B C D E F  trying to move C b.next = d
    }
  }
  
