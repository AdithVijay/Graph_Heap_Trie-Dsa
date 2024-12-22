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
            if(!this.adjacencyList[vtx1].includes(vtx2)){
                this.adjacencyList[vtx1].push(vtx2)
            }
            if(!this.adjacencyList[vtx2].includes(vtx1)){
                this.adjacencyList[vtx2].push(vtx1)
            }
        }
    }

    bfs(start){
        let stack = [start]
        let visited = []
        let result = []
        visited.push(start)
        while(stack.length>0){
            let current = stack.pop()
            result.push(current)
            for(let neighbour of this.adjacencyList[current]){
                if(!visited.includes(neighbour)){
                    visited.push(neighbour)
                    stack.push(neighbour)
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
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A','B')
g.addEdge('C','A')
g.addEdge('D','E')
g.addEdge('A','D')
g.addEdge('F','E')
console.log(g.bfs('A'));
console.log(g)
