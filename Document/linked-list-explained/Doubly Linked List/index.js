class NodeTemplete {
  constructor(value) {
    this.value = value;
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

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    let newNode = new NodeTemplete(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let popNode = this.tail;

    if (this.head === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.prev;
      popNode.next = null;
      popNode.prev = null;
    }

    this.length--;
    return popNode;
  }

  unshift(value) {
    let newNode = new NodeTemplete(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    let oldHead = this.head;

    if (this.head === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }

    this.length--;

    return oldHead;
  }
}

let test = new DoublyLinkedList();
// test.push(5);
test.unshift(10);
test.unshift(15);
test.unshift(25);
test.shift();

console.log(test);
