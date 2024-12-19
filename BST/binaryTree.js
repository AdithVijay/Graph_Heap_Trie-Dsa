class Node{
    constructor(data){
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
        const newNode = new Node(data)

        if(this.root==null){
            this.root = newNode
            return
        }

        let temp = this.root

        

        while(true){
            if(newNode.data == temp.data){
                return undefined
            }

            if(newNode.data>temp.data){
                if(temp.right===null){
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

    includes(value){

        if (this.root==null){
            return undefined
        }
        let temp = this.root

        while(temp){
            if(value==temp.data){
                return true
            }else if(value > temp.data){
                temp = temp.right
            }else if(value<temp.data){
                temp = temp.left
            }
        }

        return false

    }


}




const tree = new Tree()
tree.insert(20)
tree.insert(30)
tree.insert(10)
tree.insert(8)
console.log(tree.includes(10));
console.log(tree)
