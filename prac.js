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
            if(temp.data == data){
                return
            }

            if(data>temp.data){
                
                if(temp.right==null){
                    temp.right = newNode
                }else{
                    temp = temp.right
                }
            }else{
                if(temp.left==null){
                    temp.left = newNode
                }else{
                    temp = temp.left
                }
            }
        }
    }


    delete(data,temp = this.root){
        if(temp == null){
            return null
        }

        if(data >temp.data){
            this.right = this.delete(data,temp.right)
        }else if(data<temp.data){
            this.left = this.delete(data,temp.left)
        }else{
            if(temp.left==null && temp.right==null){
                return null
            }else if(temp.left==null ){
                return temp.right
            }else if(temp.right ==null){
                return temp.left
            }else{
                let minNode = this.minnode(temp.right)
                temp.data = minNode.data
                temp.right = this.delete(temp.data,temp.right)
            }
        }
    }

    minnode(temp){
        while( temp.left != null){
            temp = temp.left
        }
        return temp
    }

    bfs(){
        let temp = this.root
        let queue = []
        let result = []
        queue.push(temp)
        
        while(queue.length>0){
            console.log(queue)
            let current = queue.shift()
            result.push(current.data)

            if(current.left){
                queue.push(current.left)
            }

            if(current.right){
                queue.push(current.right)
            }
        }
        return result
    }

    preorder(temp=this.root,result=[]){
        if(temp==null){
            return
        }
        this.preorder(temp.left,result)
        this.preorder(temp.right,result)
        result.push(temp.data)
        return  result
    }

    leastNode(){
        let temp = this.root
        let stack = []
        while(temp.left!=null){
            temp = temp.left
            stack.push(temp.data)
        }
        return stack
    }

}

const trree = new Tree()
trree.insert(10)
trree.insert(5)
trree.insert(3)
trree.insert(6)
trree.insert(20)
console.log("D",trree.leastNode());

// console.log("sss",trree.bfs());
console.dir(trree,{depth:null})
