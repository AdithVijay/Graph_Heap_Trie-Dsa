class Heap{
    constructor(){
        this.heap = []
    }

    getParent(childIndex){
        return Math.floor((childIndex-1)/2)
    }

    getLeftChild(parentIndex){
        return 2*parentIndex+1
    }

    getRightChild(parentIndex){
        return 2*parentIndex+2
    }

    heapifyUp(){
        let index = this.heap.length-1

        while(index>0 && this.heap[index] > this.heap[this.getParent(index)]){
            this.swap(index,this.getParent(index))
            index = this.getParent(index)
        }
    }

    insert(data){
        this.heap.push(data)
        this.heapifyUp()
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }
}   
const sali = new Heap()

sali.insert(10)
sali.insert(20)
sali.insert(30)
sali.insert(50)
console.log(sali);

