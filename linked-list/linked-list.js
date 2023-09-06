const ll = LinkedList();
ll.append(0);
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);



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

  // Returns the node at the given index
  function at(idx) {
    // verificar tamaño
    if (this.head === null || idx > this.size() - 1) {
      console.log("Index out of range")
      return
    }
    // verificar si idx es el inicio o fin de la lista
    if (idx === 0) return this.getHead();
    if (idx === this.size() - 1) return this.getTail();

    let count = 0;
    let cur = this.head;
    while (count < idx) {
      cur = cur.next;
      count++;
    }
    return cur;
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
    at,
  };
}
