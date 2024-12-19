class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vtx){
        if(!this.adjacencyList[vtx]){
            this.adjacencyList[vtx] = []
        }
    }

    addEdge(vtx1,vtx2){
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]){
            this.adjacencyList[vtx1].push(vtx2)
            this.adjacencyList[vtx2].push(vtx1)
        }
    }
}

const g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("C","B")
console.log(g);
