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
        
    }

}

const tree = new Tree()
 tree.insert(10)
 tree.insert(22)
console.log(tree)
