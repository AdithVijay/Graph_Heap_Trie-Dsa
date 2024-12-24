class Heap{
    constructor(){
        this.heap = []
    }

    parentIndex(childIndex){
        return Math.floor((childIndex-1)/2)
    }

    leftChildIndex(parentIndex){
        return 2*parentIndex+1 
    }

    rightChildIndex(parentIndex){
        return 2*parentIndex+2
    }

    
}