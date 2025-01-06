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
            if(temp.data==data){
                return null
            }

            if(data > temp.data){
                if(temp.right==null){
                    temp.right = newNode
                }else{
                    temp = temp.right
                }
            }else{
                if(data < temp.data){
                    if(temp.left==null){
                        temp.left = newNode
                    }else{
                        temp=temp.left 
                    }
                }
            }
        }
    }

    search(data){
        if(this.root==null){
            return
        }
        let temp = this.root
        while(temp){    
            if(temp.data == data){
                return true
            }else if(data >temp.data){
                temp= temp.right
            }else{
                temp = temp.left 
            }
        }

    }   

    delete(data,temp = this.root){

        if(temp==null)return
            if(data > temp.data){
                temp.right = this.delete(data,temp.right)
            }else if(data < temp.data){
                temp.left = this.delete(data,temp.left)
            }else{
                if(temp.left==null && temp.right == null){
                    return null
                }else if(temp.right==null){
                    return temp.left
                }else if(temp.left==null){
                    return temp.right
                }else{
                    let minNode = this.minNode(temp.right)
                    temp.data = minNode.data
                    temp.right = this.delete(temp.data,temp.right)
                }
            }
    }

    minNode(temp){
        while(!temp.left==null){
            temp = temp.left
        }
        return temp
    }

}
const t = new Tree()
t.insert(10)
t.insert(20)
t.insert(22)
t.insert(2)
t.insert(3)
t.delete()
console.log(t.search(10));
console.dir(t)

console.log("vijay")
