// create a graph class
class Graph {
// Définir la matrice de sommet et
     // liste adjacente
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
addVertex(v)
{
  // initialiser la liste adjacente avec un
     // tableau null
    this.AdjList.set(v, []);
}
// add edge to the graph
addEdge(v, w)
{
    // obtenir la liste pour Vertex V et mettre le
     // vertex w dénotant bord entre v et w
    this.AdjList.get(v).push(w);
   // Depuis le graphique n'est indirect,
     // ajoutez un bord de w à v
    this.AdjList.get(w).push(v);
}
printGraph()
{
    // obtenir tous les sommets
    var get_keys = this.AdjList.keys();
 
    // iterate over the vertices
    for (var i of get_keys)
{
       // grande la liste de adjacence correspondante
       // pour le sommet
        var get_values = this.AdjList.get(i);
        var conc = "";
 
       // itérer sur la liste des adjacents
         // concaténate les valeurs dans une chaîne
        for (var j of get_values)
            conc += j + " ";
 
        // print the vertex and its adjacency list
        console.log(i + " -> " + conc);
    }
}
}
// Using the above implemented graph class
var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
 
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();