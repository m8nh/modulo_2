export class TreeNOde<E> {
    public data: E;
    public left: TreeNOde<E>|null;
    public right: TreeNOde<E>|null;

    constructor(data: E) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
export interface Tree<E> {
    insert(data: E): TreeNOde <E>;
    inorder(node:TreeNOde<E>): void;
    getSize(): number;
}

export class BinaryTree<E> { 
    root: TreeNOde<E> | null;
    totalNode: number;
    
    constructor() {
        this.root = null;
        this.totalNode = 0;
    }
    getSize(): number{
        return this.totalNode
    }
    inorder(node: TreeNOde<E>): void {
        if(node) {
            console.log(node.data)
            if(node.left){
                this.inorder(node.left)
            }
            if(node.right){
                const right = node.right;
                this.inorder(node.right)
            }
        }
    }
    insert(data:E): TreeNOde<E> {
        if(!this.root) {
            this.root = new TreeNOde<E>(data);
            this.totalNode++;
            return this.root;
        } else {
            let node = new TreeNOde<E>(data);
            let currentNode = this.root;

            while(currentNode) {
                if (data < currentNode.data){
                    if (!currentNode.left){
                        currentNode.left = node;
                        break
                    }
                    currentNode = currentNode.left;
                } else if (data > currentNode.data){
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                }
                currentNode = currentNode.right
            }
        }
        this.totalNode++
        return currentNode
    }
    }
}
let tree = new BinaryTree<number>();
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);

console.log(`The numbers of nodes ${tree.totalNode}`)
if (tree.root)
tree.inorder(tree.root)
