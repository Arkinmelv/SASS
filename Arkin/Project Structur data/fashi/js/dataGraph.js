// https://dev.to/emmabostian/creating-graphs-with-javascript-4efm

// Pemetaan hubungan antar data / antar titik 
//ex 
// 1. Hubungan antar user , follow follback ig, fb, dll

// Membuat neigbor node
function createNode(key){
    const neighbors = [];
    return{
        key,
        neighbors,

        //method menambahkan neighbor
        addNeighbor : function(node){
            neighbors.push(node)
        }
    }
}

// ada 2 directed , undirected
// undirec = tidak ada hubungan
// directed = ada hubungan 
// jadi nanti ani => banu , banu => ani = directed
// undirected = ani => banu, banu x ani

// mirip arkin follow dia, dia tidak follow arkin = undirected
// mirip arkin follow dia, dia follow arkin = directed

function createGraph(directed = false){
    const nodes = [];
    const edges = [];
    
    return{
        directed,
        //titik" dari data 
        nodes,
        //pemetaaan satu hubungan dengan hubungan lainnya  
        edges,

        addNode: function(key){
            const newNode = createNode(key);
            nodes.push(newNode)
        },
        getNode: function(key){
            return nodes.find(function(node){
                return node.key == key;
            })
        },
        addEdge: function(node1key, node2key){
            const node1 = this.getNode(node1key);
            const node2 = this.getNode(node2key);

            node1.addNeighbor(node2);
            if(!directed){
                node2.addNeighbor(node1);
            }
        },
        print: function(){
            return nodes.map(function({key, neighbors}){
                let result = key;

                if(neighbors){
                    result += ` => ${neighbors.map(function(neigbor){
                        return neigbor.key;
                    }).join(' ')}`;
                }
                return result;
            }).join('\n')         
        },
        recomend: function(){
            // [{id: "1", name : "pack"}]
            // {1 [{}, {}] 2: [{}, {}]   }
            // localhost:8000/Product.html?id=1

            let results = {};

            nodes.map(function({key, neighbors}){
                let itemId = key.id;

                if(neighbors){
                    results[itemId] = neighbors.map(function(neigbor){
                        return neigbor.key
                    });
                }
                return itemId;
            });
            
            return results;      
        }
    }
}












