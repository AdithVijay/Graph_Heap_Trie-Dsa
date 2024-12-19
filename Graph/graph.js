class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vtx){
        if(!this.adjacencyList[vtx]){
            this.adjacencyList[vtx] = []
        }
    }

    addEdge(vtx1,vtx2){
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]){
            
        }
    }
}