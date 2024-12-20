class Heap {
    constructor() {
        this.heap = []
    }
    getParent(childIndex){
        return Math.floor((childIndex-1)/2)
    }

    getLeftleftIndex(parentIndex){
        return 2*parentIndex+1
    }

    getRightIndex(parentIndex){
        return 2*parentIndex+2
    }

    insert(value){
         this.heap.push(value)
          this.heapfyUp()
    }

    heapfyUp(){
        let index = this.heap.length-1
        while(index>0 && this.heap[index] > this.heap[this.getParent(index)]){
            this.swap(index,this.getParent(index))
            index = this.getParent(index)
        }
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] =[this.heap[index2],this.heap[index1]]
    }

}
const amal = new Heap()
amal.insert(20)
amal.insert(25)
amal.insert(10)
amal.insert(5)
amal.insert(15)
amal.insert(3)
amal.insert(7)
console.log(amal);
