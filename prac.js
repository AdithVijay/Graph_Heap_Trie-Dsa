class Graph{
    constructor(){
           this.adjacencyList = {}
    }

    addVertex(vtx){
        if(!this.adjacencyList[vtx]){
            this.adjacencyList[vtx] =[]
        }
    }

    adEdge(vtx1,vtx2){
        if(this.adjacencyList[vtx1] &&this.adjacencyList[vtx2]){
            this.adjacencyList[vtx1].push(vtx2)
            this.adjacencyList[vtx2].push(vtx1)
        }
    }

    bfs(start){
        let queue = [start]
        let visited = []
        let result = []

        visited.push(start)

        while(queue.length>0){
            let current = queue.pop()
            result.push(current)
            for(let neighbour of this.adjacencyList[current]){
                if(!visited.includes(neighbour)){
                    queue.push(neighbour)
                    visited.push(neighbour)
                }
            }
        }
        return result
    }
}

const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.adEdge('A','B')
g.adEdge('A','C')
g.adEdge('B','C')
console.log(g.bfs('A'))
console.log(g);
