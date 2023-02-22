console.log('Recomendantion')

const items = [
    { id: 1, title: 'Jurasic Park Original Bones Backpack', price: '19.99', img: 'img/bp8uq9jpa-5.jpg' },
    { id: 2, title: 'Sonic The Hedgehog Adult Unisex Geiter', price: '7.99', img: 'img/ga9llfseg-4.jpg' },
    { id: 3, title: 'Stars Wars Storm Troopers 7 3D Mug', price: '14.99', img: 'img/abymug362.jpg' },
    { id: 4, title: 'Stars Wars Boba Feet', price: '7.99', img: 'img/abykey083.jpg' },
    { id: 5, title: 'Jurasic Park Ranger Snapback Cap', price: '14.99', img: 'img/sb7ke3jpa-3.jpg' },
];
const items2 = [
    { id: 2, title: 'Sonic The Hedgehog Adult Unisex Geiter', price: '7.99', img: 'img/ga9llfseg-4.jpg' },
    { id: 6, title: 'Pac-Man Maze Safe Ball', price: '14.99', img: 'img/gifpa719-1.jpg' },
    { id: 7, title: 'Harry Potter Glasses & scar Mens T-Shirt', price: '14.99', img: 'img/scar-glasses-black.jpg' },
    { id: 8, title: 'Batman Shinny', price: '7.99', img: 'img/kh101vbtm-1' },
    { id: 1, title: 'Jurasic Park Original Bones Backpack', price: '19.99', img: 'img/bp8uq9jpa-5.jpg' },
];

const graph = createGraph(false);
// graph.addNode(items[0]);
// graph.addNode(items[1]);
// graph.addNode(items[2]);


//Node Theo
for (let i = 0; i < items.length; i++) {
    graph.addNode(items[i]);
}

for (let e = 0; e < items.length - 1; e++) {
    graph.addEdge(items[e], items[e+1]);
}


// Node Vini
for (let i = 0; i < items2.length; i++) {
    graph.addNode(items2[i]);
}

for (let e = 0; e < items2.length - 1; e++) {
    graph.addEdge(items2[e], items2[e+1]);
}


// result
const recomendantion = graph.recomend();

// console.log(recomendantion)

const allItems = items.concat(items2)
allItems.splice(5, 1);
allItems.pop();
// console.log(allItems)




