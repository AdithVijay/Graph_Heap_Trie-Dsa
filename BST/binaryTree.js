class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}


class BinaryTree{
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


    delete(value , temp = this.root){

        if(temp == null){
            return null
        }
      
        if(value>temp.data){
            temp.right = this.delete(value,temp.right)
        }else if(value<temp.data){
            temp.left = this.delete(value,temp.left)
        }
        else{
            console.log("reciverd");
            if(temp.left==null && temp.right == null){
                return null
            }
            else if(temp.left==null){
                return temp.right
            }else if(temp.right==null){
                return temp.left
            }
            else{   
               let minNode = this.findMin(temp.right)
                temp.data = minNode.data
                temp.right = this.delete(temp.data,temp.right)
            }
        }
        return temp
    }

    findMin(temp){
        while(!temp.left){
            temp = temp.left
        }
        return temp
    }
}



const tree = new Tree()
tree.insert(20)
tree.insert(30)
tree.insert(25)
tree.insert(35)
tree.insert(32)
tree.insert(10)
tree.insert(11)
tree.insert(8)
tree.delete(32)
console.log(tree)
