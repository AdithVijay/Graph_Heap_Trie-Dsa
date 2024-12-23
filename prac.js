class Heap{
    constructor(){
        this.heap = []
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2)
    }

    getLeftChld(parentIndex){
        return 2*parentIndex+1
    }

    getrightChld(parentIndex){
        return 2*parentIndex+2
    }

    insert(data){
        this.heap.push(data)
        this.heapyfyUp()
    }

    heapyfyUp(){
        let index = this.heap.length-1

        while(index>0 && this.heap[index] > this.heap[this.getParentIndex(index)]){
            this.swap(index,this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }   

    remov(){
        let lastElemnt = this.heap.pop()
        this.heap[0] = lastElemnt
        let index = this.heap[0]
        this.heapyfyDown(index)
    }

    heapyfyDown(index){
        while(this.getLeftChld(index) < this.heap.length ){
            let largest = this.getLeftChld(index)

            if(this.heap[this.getrightChld[index]] >this.heap.length && this.heap[this.getrightChld[index]] >this.heap[this.getLeftChld[index]]){
                let largest = this.getrightChld(index)
            }

            if(this.heap[index]>this.heap[largest]) break
            
            this.swap(index,largest)
            index = largest
        }
    }
}

const h = new Heap
h.insert(10)
h.insert(20)
h.insert(30)
h.insert(40)
h.remov()
console.log(h);
