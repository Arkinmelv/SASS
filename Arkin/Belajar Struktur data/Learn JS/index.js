// Object >>>>>>

const owners = ["Ani", "As'ad", "Adi", "Arkin", "Andhika"]

let startup = {
    name : 'Aloha',
    description : 'Stream Online Film and series.' , 
    colors : ['red', 'yellow'] , 
    owner : owners[0] ,
    isRelease : true,
    location : 'Surabaya East Java' ,
    fullDec : function(){
        return this.name + ' is ' + this.description
    }
}

console.log(startup.fullDec());
console.log(startup.owner)
// alert(startup.description)

const OnlineStartup = Object.keys(startup)
console.log(OnlineStartup)

//keys is function
// 

const inter = Object.values(startup)
console.log(inter)

const external = Object.entries(startup)
console.log(external)

// Object.defineProperties
// Object.defineProperty

//add
startup.price = 25000
console.log(startup)

//update
startup.price = 35000
console.log(startup)

//Delete
delete startup.price


console.log('=================Batas===================')

//STACK
//LIFO

//IMPLEMENTASI 
//Tumpukan piring kotor 
//Mengambil piring paling atas untuk memudahkan saat mau eksekusi
// Jadi nanti akan take data dari atas dulu 
// fungsinya untuk mempermudah akses datanya 
// dan bais nya sepeti itu 
// TRY

function createStack(){
    
    let array = [];
    return{

        // Membuat Method
        // Return strucktur data object yang bisa menerima fungsi 
        // Method = push, pop, lenght
        // push 

        name : 'your name',
        nameInvander : function(){
            return this.name
        },

        //push = Menambah data baru 
        push : function(item){
            return array.push(item)
        },


        // pop = menghapus data / elemen terahir 
        pop : function(){
            return array.pop()
        },

        
        // peek = method yang tak buat untuk mengetahui isi dari array yang sudah di masukan
        peek : function(){
            return array[array.length - 1]
        },

        // size = mengetahui panjang dari sebuah array
        size : function(){
            return array.length;
        },
    }
}

// const dataBook = function bookStack(){

// }

// Impementasi Membuat Rak buku
const aquariumStack = createStack();


console.log('=================1===================')
// [PUSH] Menambah isi dari array kosong 
aquariumStack.push("Nila");
aquariumStack.push('Arawana');
aquariumStack.push('Cupang');

// [PEEK] Method yang dinamai sendiri dan di dalam method mereturn/mengembalikan nilai masukan
// atau (lenght) dari sebuahd data.
console.log('Aquarium yang bisa di tampilkan = ' + aquariumStack.peek())
console.log(aquariumStack.nameInvander())


console.log('=================2===================')

// Study kasus , saya sudah melihat isi aquarium pertama
// saya ingin lanjut dan menaruh aquarium pertama(yang sudah di baca) di gudang / mengapusnya 

aquariumStack.pop();
console.log('Aquarium yang bisa di tampilkan = ' + aquariumStack.peek());

// Menampilkan panjang array terbaru
console.log('sisa aquarium sekarang = ' + aquariumStack.size())

console.log('=================3===================')


function add(a, b){
    return a + b;
}

function double(a){
    return add(a, a)
}

console.log(double(5))


console.log('=================Batas===================')

//Q QUEUE

function createQueue(){
    queue = [] //konsep [3, 2, 1]
                //      [2, 1]
                //      [1]
                //      []

                // adding data
                // [1]
                // adding data
                // [2, 1]
                // dst

                // delete 
                // pop
                // [3, 2, 1]
                // pop
                // [3, 2]
                // dst

                // done
    return{

        //add new data
        enqueue : function(value){
            queue.unshift(value);
        },

        // delete data first
        dequeue : function(){
            queue.pop()
        },

        // peek = method yang tak buat untuk mengetahui isi dari queue yang sudah di masukan
        peek : function(){
            return queue[queue.length - 1]
        },

        // size = mengetahui panjang dari sebuah queue
        size : function(){
            return queue.length;
        },
    }
}

//Inisiasi dan adding data
const q = createQueue();
q.enqueue('a')
q.enqueue('a1')
q.enqueue('a2')
q.enqueue('a3')
q.enqueue('a4')

//view
console.log(q.peek())

// Deque atau menghapus data
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()

console.log(q.peek())










