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

    insert(data){
        this.heap.push(data)
        this.heapyFyup()
    }

    heapyFyup(){
        let index = this.heap.length-1
        while(index>0 && this.heap[index]>this.heap[this.parentIndex(index)]){
            this.swap(index,this.parentIndex(index))
            index = this.parentIndex(index)
        }
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }


    remov(){
        if(this.heap.length==0)return
        let element = this.heap[0]
        if (this.heap.length === 1) { 
            this.heap.pop(); // Just remove the only element
            return element
        }
        let index = 0
        let lastElement = this.heap.pop()
        this.heap[index] = lastElement
        this.heapyFyDown(index)
        return element
    }

    heapyFyDown(index=0){
        while(this.leftChildIndex(index)<this.heap.length){     
            let largest = this.leftChildIndex(index)
            console.log()
                if(this.rightChildIndex(index)<this.heap.length && this.heap[this.rightChildIndex(index)]>this.heap[this.leftChildIndex(index)]){
                largest = this.rightChildIndex(index)
            }
            if(this.heap[index]>this.heap[largest]) break
            this.swap(index,largest)
            index = largest
        }
    }

    heapSort(){
        let originalHeap = [...this.heap]
        console.log(originalHeap);
        let arr = []
        while(this.heap.length>0){
            arr.push(this.remov())
        }
        this.heap = originalHeap
        console.log("aarr",arr)
    }

}
const h = new Heap()
h.insert(10)
h.insert(20)
h.insert(2)
h.insert(30)
h.insert(5)
h.insert(50)
h.heapSort()
console.log(h);



