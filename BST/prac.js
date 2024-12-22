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
        if(this.root == null){
            this.root =newNode
            return 
        }
        let current = this.root
        while(true){

            if(current.data == newNode.data){
                return
            }

            if(newNode.data > current.data){
                if(current.right==null){
                    current.right = newNode   
                }else{
                    current =  current.right
                }
            }else{
                if(current.left==null){
                    current.left = newNode   
                }else{
                    current =  current.left
                }
            }
        }

    }

    get(data){
        if(this.root==null){
            return
        }

        let current = this.root
        
        while(current){
            if(data > current.data  ){
                current = current.right
            }
            if(data < current.data){
                current = current.left
            }else{
                return true
            }
        }
        return false
    }

    delete(data,temp = this.root){
        if(temp==null){
            return
        }
        
        while(temp){
            if(data == temp){
                return null
            }

            if(data>temp.data){
                temp.right = this.delete(data,temp.right)
            }else if(data<temp.data){
                temp.left = this.delete(data,temp.left)
            }else{
                if(temp.left==null){
                    return temp.right
                }else if(temp.right==null){
                    return temp.left
                }else{
                    let minNode = this.minNode(temp.right)
                    temp.data = minNode
                    temp.right = this.delete(temp.data,temp.right)
                }
            }
        }  
    }

    minNode(temp){
        while(!temp.left==null){
            temp = temp.left
        }
    }

}

const tree = new Tree()
 tree.insert(10)
 tree.insert(22)
 tree.delete(10)
  console.log(tree.get(22))
console.log(tree)
