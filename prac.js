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
        let newNode = new Node(data)
        if(this.root==null){
            this.root= newNode
            return
        }

        let current = this.root
        while(true){
            if(data == current.data){
                return
            }
            if(data>current.data){
                if(current.right==null) {
                    current.right = newNode
                }else{
                    current = current.right
                }
            }else{
                if(current.left==null) {
                    current.left = newNode
                }else{
                    current = current.left
                }
            }
        }
    }


    delete(data,temp= this.root){
        if(temp==null){
            return null
        }
        if(data>temp.data){
            temp.right = this.delete(data,temp.right)
        }else if(data<temp.data){
            temp.left = this.delete(data,temp.left)
        }else{
            if(temp.left==null && temp.right==null){
                return null
            }else if(temp.left==null){
                return temp.right
            }else if(temp.right==null){
                return temp.left
            }else{
                let minNode = this.minNode(temp.right)
                temp.data = minNode.data
                temp.right = this.delete(temp.data,temp.right)
            }
        }
        return temp
    }


    bfs(){
        let queue = []
        let  result= []
        let start = this.root
        queue.push(start)

        while(queue.length>0){
            let current = queue.shift()
            result.push(current.data)
            if(current.left!=null){
                queue.push(current.left)
            }

            if(current.right!=null){
                queue.push(current.right)
            }
        }
        console.log(result)    
    }
    

    minNode(temp){
        while(temp.left!=null){
            temp = temp.left
        }
        return temp
    }
}
const t = new Tree()
t.insert(10)
t.insert(20)
t.insert(30)
t.insert(2)
t.bfs()
console.log("dfsssss",t.dfs())
// console.dir(t,{depth:null})
