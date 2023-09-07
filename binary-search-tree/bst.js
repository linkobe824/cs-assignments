const listOfElements = [12,65,48,95,120,32,4,65,98,45,1,2,78];

let tree = Tree(listOfElements);
tree.prettyPrint();
tree.insert(33)
tree.prettyPrint()

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
        }
        else if (newNode.value > parent.value){
            if (parent.right === null) {
                parent.right = newNode;
                return
            }
            parent = parent.right;
        }
        else {
            console.log("Value already exists in Tree");
            return
        }
        
    }
  }

  function remove(value) {
    
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
  };
}
