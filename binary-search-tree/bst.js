function Node(value) {
  return {
    value,
    left: null,
    right: null,
  };
}

export default function Tree(arr) {
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
        console.log('Value is not in tree');
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
          //delete root;
          root = null;
        }
        // caso 2. solo un hijo
        else if (root.left === null) {
          let temp = root;
          root = root.right;
          //delete temp;
        } else if (root.right === null) {
          let temp = root;
          root = root.left;
          //delete temp;
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
          //delete successor;
        }
      }
      return root;
    }

    return helper(root, value);
  }

  function find(value) {
    let node = root;
    while (node != null) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        return node;
      }
    }
    console.log('value not found');
    return null;
  }

  function levelOrder(fcn = 0) {
    let q = [root];
    const res = [];

    while (q.length > 0) {
      let visited = q.shift();
      if (fcn) {
        fcn(visited);
      }
      res.push(visited.value);
      if (visited.left) {
        q.push(visited.left);
      }
      if (visited.right) {
        q.push(visited.right);
      }
    }
    return res;
  }

  function levelOrderRec(q = [root], res = []) {
    if (q.length === 0) return res;

    const visited = q.shift();
    res.push(visited.value);
    if (visited.left) q.push(visited.left);
    if (visited.right) q.push(visited.right);
    return levelOrderRec(q, res);
  }

  function preorder() {
    const visited = [];

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(root);
    return visited;
  }

  function inorder() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(root);
    return visited;
  }

  function postorder() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(root);
    return visited;
  }

  // funcion que acepta un nodo y encuentra la altura de ese nodo
  // la altura de un nodo es el numero de aristas que conenctan
  // a ese nodo con la hoja mas lejana.
  // si no se ingresa argumento, regresa la altura de root.
  function height(node = root) {
    if (node === null) {
      return -1;
    }
    return 1 + Math.max(height(node.left), height(node.right));
  }

  // acepta un nodo y regresa su profundidad.
  // le profundidad es el numero de aristas del root a ese nodo.
  // retorna null si el valor no existe
  // si no se proporciona nodo, retorna la altura de root i.e 0.
  function depth(node = root) {
    if (node === null) {
      return node;
    }
    let current = root;
    let count = 0;
    while (current != null) {
      if (node.value < current.value) {
        count++;
        current = current.left;
      } else if (node.value > current.value) {
        count++;
        current = current.right;
      } else {
        return count;
      }
    }
  }
  // Un arbol balanceado es aquel en el que la diferencia de altura
  // de el subtree derecho y el subtree izquierdo es <= 1 para cada nodo
  function isBalanced() {
    // utilizar bfs para visitar cada nodo
    let q = [root];

    while (q.length > 0) {
      let node = q.shift();
      // verificar balance
      if (Math.abs(height(node.left) - height(node.right)) > 1) return false;

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return true;
  }

  function rebalance() {
    const newTree = inorder();
    root = _buildTree(newTree);
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
    levelOrder,
    levelOrderRec,
    inorder,
    preorder,
    postorder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
}

