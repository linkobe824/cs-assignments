// crear array aleatorio
export function randomArray (numberOfElems, min, max){
    const arr = [];
    for(let i = 0; i < numberOfElems; i++){
        arr.push(getRandomInt(min,max))
    }
    return arr
}

// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

// funcion para crear un arbol desbalanceado
export function createUnbalancedTree(tree, quantityExtraElements){
    const extraElements = randomArray(quantityExtraElements, 100, 300);
    extraElements.forEach(element => tree.insert(element))
    return tree
}

export function logBalance(tree) {
    let balance = tree.isBalanced()
    console.log(`The tree is ${balance ? "balanced" : "not balanced"}`);
}

export function logTreeTraversals(tree) {
    console.log("Level Order Elements")
    console.log(tree.levelOrder())
    console.log("Preorder Elementes")
    console.log(tree.preorder())
    console.log("Inorder Elementes")
    console.log(tree.inorder())
    console.log("Postorder Elementes")
    console.log(tree.postorder())
}