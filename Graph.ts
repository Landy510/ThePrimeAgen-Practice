/**
 * Implementation of Graph
 */
class Graph {
    public adjacencyList: {[key: string]: Array<string>};
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string) {
        this.adjacencyList[vertex] = [];
    }

    addEdgeDirected(vertex1: string, vertex2: string) {
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        if(this.adjacencyList[vertex1].indexOf(vertex2) < 0) {
            this.adjacencyList[vertex1].push(vertex2);
        }
    }

    addEdgeUndirected(vertex1: string, vertex2: string) {
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        if(this.adjacencyList[vertex1].indexOf(vertex2) < 0) {
            this.adjacencyList[vertex1].push(vertex2);
        }
        if(this.adjacencyList[vertex2].indexOf(vertex1) < 0) {
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeVertex(vertex: string) {
        if(vertex in this.adjacencyList) {
            delete this.adjacencyList[vertex];
            let vertexList = Object.keys(this.adjacencyList);
            vertexList.forEach(el => {
                const index = this.adjacencyList[el].indexOf(vertex);
                if(index >= 0) this.adjacencyList[el].splice(index, 1);
            })
        }
    }

    removeEdge(vertex1: string, vertex2: string) {
        const index = this.adjacencyList[vertex1].indexOf(vertex2)
        if(index >= 0) {
            this.adjacencyList[vertex1].splice(index, 1);
        }
    }

    // BFS from given source current_vertex
    // will only traverse the vertices which are conntected with other vertices.
    bfsConnected(current_vertex: string) {
        var vertices = Object.keys(this.adjacencyList);
        if(vertices.length == 0) return;
        let visited = {} as {[key: string]: boolean};
        vertices.forEach(item => visited[item] = false);
        this._bfs(current_vertex, visited);
    }

    // Perform BFS for the entire graph
    // will traverse every vertex in the list no matter it is connected or not.
    bfsDisconnected() {
        var vertices = Object.keys(this.adjacencyList);
        if(vertices.length == 0) return;
        let visited = {} as {[key: string]: boolean};
        vertices.forEach(vertex => visited[vertex] = false);
        for(const vertex of vertices) {
            if(!visited[vertex]) {
                this._bfs(vertex, visited);
            }
        }
    }

    _bfs(vertex: string, visited: {[key: string]: boolean}) {
        var queue = [] as string[];
        visited[vertex] = true;
        queue.push(vertex);
        while(queue.length > 0) {
            const curr = queue.shift();
            console.log(`Visited Vertex: ${curr}`);
            if(!curr) break;
            const neighbours = this.adjacencyList[curr];
            for(const neighbour of neighbours) {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            }
        }
    }

    _dfs(vertex: string, visited: {[key: string]: boolean}) {
        var stack = [] as string[];
        visited[vertex] = true;
        stack.push(vertex);
        while(stack.length > 0) {
            const curr = stack.pop();
            if(!curr) break;
            console.log(`Visited Vertex: ${curr}`);
            const neighbours = this.adjacencyList[curr]
            neighbours.forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            })
        }
    }
}

const middle_earth = new Graph();
middle_earth.addVertex('Gandalf');
middle_earth.addVertex('Saruman');
middle_earth.addVertex('Frodo');
middle_earth.addVertex('Billy');
middle_earth.addVertex('Sean');
middle_earth.addVertex('Merry');
middle_earth.addVertex('Sméagol');
middle_earth.addEdgeUndirected('Gandalf', 'Saruman');
middle_earth.addEdgeUndirected('Gandalf', 'Frodo');
middle_earth.addEdgeUndirected("Gandalf", "Billy");
middle_earth.addEdgeUndirected('Gandalf', 'Sean');
middle_earth.addEdgeUndirected('Gandalf', 'Merry');

console.log("BFS starting from 0:");
middle_earth.bfsDisconnected()