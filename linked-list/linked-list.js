const ll = LinkedList();
ll.append(5);
ll.append(7);
ll.append(3);

ll.prepend(1);

console.log(ll.getTail())

function Node(data) {
  return {
    data,
    next: null,
  };
}

function LinkedList() {
  // Adds a new value at the end of the list
  // function append(value) {
  //   const newNode = Node(value);
  //   if (this.head == null) {
  //     this.head = newNode;
  //     this.tail = newNode;
  //   } else {
  //     let cur = this.head;
  //     while (cur.next != null) {
  //       cur = cur.next;
  //     }
  //     cur.next = newNode;
  //     this.tail = newNode;
  //   }
  //   console.log(this);

  // Adds a new value at the end of the list
  function append(value) {
    const newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    console.log(this);
  }

  // Adds a new value at the start of the list
  function prepend(value) {
    const newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    console.log(this);
  }

  // Returns the total number of nodes in the list
  function size() {
    return this.length;
  }

  // Returns the first node in the list
  function getHead() {
    return this.head;
  }

  // Returns the last node in the list
  function getTail() {
    return this.tail;
  }


  return {
    head: null,
    tail: null,
    length: 0,

    append,
    prepend,
    size,
    getHead,
    getTail,
  };
}
