class Heap{
    constructor(){
        this.heap =[]
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2)
    }

    getLeftChild(parentIndex){
        return 2*parentIndex+1
    }

    getRightChild(parentIndex){ 
        return 2*parentIndex+2
    }

    insert(data){
        this.heap.push(data)
        this.heapyfyup()
    }

    remov(){
        let index = 0
        this.heap[index] = this.heap.pop()
        this.heapyfydown()
    }

    heapyfydown() {
        let index = 0; 
        while (this.getLeftChild(index) < this.heap.length) {
            let largeChildIndex = this.getLeftChild(index);
    
            // Determine the larger of the two children
            if (this.getRightChild(index) < this.heap.length && 
                this.heap[this.getRightChild(index)] > this.heap[largeChildIndex]) {
                largeChildIndex = this.getRightChild(index);
            }
    
            // If the current node is already larger than or equal to the largest child, stop
            if (this.heap[largeChildIndex] <= this.heap[index]) break;
    
            // Swap parent with the larger child
            this.swap(index, largeChildIndex);
    
            // Move the index to the child's position for the next iteration
            index = largeChildIndex;
        }
    }


    heapyfyup(){
        let index = this.heap.length-1
        console.log("heap",this.heap[index])
        console.log("parent",this.heap[this.getParentIndex(index)])
        while( index > 0 && this.heap[index] > this.heap[this.getParentIndex(index)]){
            this.swap(index ,this.getParentIndex(index) )
            index = this.getParentIndex(index)
        }   
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]] 
    }
}
const heaps = new Heap()
heaps.insert(10)
heaps.insert(20)
heaps.insert(30)
heaps.insert(40)
heaps.insert(50)
heaps.insert(60)
heaps.remov()

console.log(heaps);
