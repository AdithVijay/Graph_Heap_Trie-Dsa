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
            if(!this.adjacencyList[vtx2].includes(vtx1) && !this.adjacencyList[vtx1].includes(vtx2)){
                this.adjacencyList[vtx2].push(vtx1)
                this.adjacencyList[vtx1].push(vtx2)
            }
        }

    }


    bfs(start){
        let queue = [start]
        let result = []
        let visited = []

        visited.push(start)

        while(queue.length>0){
            let current  = queue.shift()
            result.push(current)

            for(let adjacet of this.adjacencyList[current]){
                if(!visited.includes(adjacet)){
                    visited.push(adjacet)
                    queue.push(adjacet)
                }
            }
        }
        return result;
    }




}
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('C','D')
graph.addEdge('D','E')
console.log(graph.bfs('A'))
console.log(graph);
