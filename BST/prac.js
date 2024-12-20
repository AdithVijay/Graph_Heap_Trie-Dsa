class Node {
    constructor(data) {
        this.data = data 
        this.left = null
        this.right = null
    }
}


class Tree{
    constructor(){
        this.root = null
    }


    insert(data){
        const newNode= new Node(data)
        if(this.root==null){
            this.root = newNode
            return
        }
        let temp = this.root

        while(true){
            if(newNode.data == temp.data){
                return
            }

            if(newNode.data>temp.data){
                if(temp.right==null){
                    temp.right = newNode
                }else{
                    temp = temp.right
                }
            }else if(newNode.data<temp.data){
                if(temp.left==null){
                    temp.left = newNode
                }else{
                    temp = temp.left
                }
            }
        }
    }
}

const tree = new Tree()
tree.insert(10)
tree.insert(20)
tree.insert(5)
tree.insert(4)
tree.insert(6)
tree.insert(22)
tree.insert(16)
console.log(tree);
