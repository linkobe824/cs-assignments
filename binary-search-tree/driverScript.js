import Tree from "./bst.js";
import { randomArray, createUnbalancedTree, logBalance, logTreeTraversals } from "./utility.js";

console.log("Create random Balanced Tree");
const listOfElements = randomArray(20, 0,100);
const tree = Tree(listOfElements);
tree.prettyPrint()

logBalance(tree);

console.log("\nTree Traversal");
logTreeTraversals(tree);

console.log("\nUnbalance the tree");
const unbalancedTree = createUnbalancedTree(tree, 10);
unbalancedTree.prettyPrint();
logBalance(unbalancedTree);

console.log("\nRebalance the tree")
unbalancedTree.rebalance();
unbalancedTree.prettyPrint()
logBalance(unbalancedTree);

console.log("\nTree Traversal");
logTreeTraversals(unbalancedTree);