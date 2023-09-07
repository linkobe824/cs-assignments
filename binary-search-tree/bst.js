const listOfElements = [12, 65, 48, 95, 120, 32, 4, 33];

let tree = Tree(listOfElements);
tree.prettyPrint();
console.log(tree.find(48))

function Node(value) {
  return {
    value,
    left: null,
    right: null,
  };
}

function Tree(arr) {
  let root = _buildTree(arr);

  function _buildTree(arr) {
    const sortedArray = _sortAndRemoveDuplicates(arr);

    function helper(arr) {
      const size = arr.length;
      if (!size) return null;

      const mid = Math.floor(size / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid + 1);
      const root = Node(arr[mid]);
      root.left = helper(left);
      root.right = helper(right);

      return root;
    }

    return helper(sortedArray);
  }

  function _sortAndRemoveDuplicates(arr) {
    return arr
      .filter((item, index) => arr.indexOf(item) === index)
      .sort((a, b) => a - b);
  }

  function insert(value) {
    const newNode = Node(value);
    let parent = root;

    // recorre nodos hasta que un hijo adecuado este vacio.
    while (true) {
      if (newNode.value < parent.value) {
        if (parent.left === null) {
          parent.left = newNode;
          return;
        }
        parent = parent.left;
      } else if (newNode.value > parent.value) {
        if (parent.right === null) {
          parent.right = newNode;
          return;
        }
        parent = parent.right;
      } else {
        console.log('Value already exists in Tree');
        return;
      }
    }
  }

  function remove(value) {
    function helper(root, value) {
      if (root === null) {
        console.log("Value is not in tree")
        return;
      }
      // root.child = recursive call para que al retornar el root (nodo)
      // de helper(), este se vuelva el hijo de root
      if (value < root.value) {
        root.left = helper(root.left, value);
      } else if (value > root.value) {
        root.right = helper(root.right, value);
      } else {
        // se encontro el nodo a eliminar
        //caso 1. no tiene hijos
        if (root.left === null && root.right === null) {
          delete root;
          root = null;
        }
        // caso 2. solo un hijo
        else if (root.left === null) {
          let temp = root;
          root = root.right;
          delete temp;
        } else if (root.right === null) {
          let temp = root;
          root = root.left;
          delete temp;
        }
        // caso 3. ambos hijos
        else {
          let successorParent = root;

          //encontrar al minimo del sub-tree derecho
          let successor = root.right;
          while (successor.left != null) {
            successorParent = successor;
            successor = successor.left;
          }

          if (successorParent != root) {
            successorParent.left = successor.right;
          } else {
            successorParent.right = successor.right;
          }

          // copia el valor del sucesor al root
          root.value = successor.value;

          // elimina sucesor y retorna el root
          delete successor;
        }
      }
      return root;
    }

    return helper(root, value);
  }

  function find(value) {
    function helper(root, value) {
        if (root === null) {
            console.log("Value not found");
            return;
        }
        
        if(value < root.value){
            helper(root.left, value);
        }
        else if (value > root.value) {
            helper(root.right, value);
        }
        else{
            console.log("founded");
            return root;
        }
    }

    return helper(root, value);
  }








  function prettyPrint(node = root, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  return {
    root,

    prettyPrint,
    insert,
    remove,
    find,
  };
}
