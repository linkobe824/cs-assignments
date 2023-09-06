const ll = LinkedList();
ll.append(0);
ll.append(1);
ll.append(5);
ll.append(3);

ll.toString();

ll.removeAt(0);
ll.toString();

function Node(data) {
  return {
    data,
    next: null,
  };
}

function LinkedList() {
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
    this.length++;
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
    this.length++;
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
      console.log('Index out of range');
      return;
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

  // removes the last element form the list and return it
  function pop() {
    // verificar si la lista esta vacia
    if (!this.size()) {
      console.log('List is empty');
      return;
    }

    let poppedNode = null;
    // verificar si solo hay un elemento en la lista
    if (this.head === this.tail) {
      poppedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      // atravesar la lista hasta un nodo antes del tail.
      let cur = this.head;
      while (cur.next != this.tail) {
        cur = cur.next;
      }
      poppedNode = this.tail;
      cur.next = null;
      this.tail = cur;
    }

    this.length--;
    return poppedNode;
  }

  //  returns true if the passed in value is in the list and otherwise returns false.
  function contains(value) {
    // verificar que lista no este vacia
    if (!this.size()) {
      console.log('List is empty');
      return;
    }
    // atravesar la lista hasta que encuentre el valor o llegue al final
    let cur = this.head;
    while (cur != null) {
      if (cur.data === value) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  // returns the index of the node containing value, or null if not found.
  function find(value) {
    // verificar que lista no este vacia
    if (!this.size()) {
      console.log('List is empty');
      return;
    }
    // atravesar la lista hasta que encuentre el valor o llegue al final
    let cur = this.head;
    let count = 0;
    while (cur != null) {
      if (cur.data === value) {
        return count;
      }
      count++;
      cur = cur.next;
    }
    return null;
  }

  function toString() {
    let stringList = '';
    let cur = this.head;
    while (cur != null) {
      stringList += `( ${cur.data} ) -> `;
      cur = cur.next;
    }
    stringList += 'null';
    console.log(stringList);
  }

  // inserts a new node with the provided value at the given index.
  function insertAt(value, index) {
    if (index > this.size - 1) {
      console.log('Index out of range');
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = Node(value);
    const prevNode = this.at(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
  }

  //removes the node at the given index.
  function removeAt(index) {
    if (this.size() === 0 || index > this.size() - 1) {
      console.log("Index out of range");
      return;
    }
    // si es el ultimo elemento
    if (index === this.size() - 1) {
      this.pop();
      return;
    }
    // almacenar nodo a remover en variable
    const removedNode = this.at(index);
    // si solo es un elemento
    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    }
    // si es el primer elemento
    else if (index === 0) {
      this.head = this.head.next;
      removedNode.next = null;
    }
    else {
      const prevNode = this.at(index - 1);
      const nextNode = removedNode.next;

      removedNode.next = null;
      prevNode.next = nextNode;
    }
    
    this.length --;
    return removedNode;
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
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
