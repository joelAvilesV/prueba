for(let i=0; i<10 ; i++){

}

for(let j=5; j<20 ; j++){
    
}


const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let j=0 ; j< numeros.length ; j++){
    if (numeros[j]%2 ===0){
        console.log(numeros[j])
    }
}

const alumnos =["joel","guillermo","pepe","yubel","diego"]

for(let i=0;i< alumnos.length;i++){
    console.log(alumnos[i]);
}

const laptop =[
    {
    marca: "mac",
    precio: 2500,
    nombre : "android",
},
{
    marca: "acer",
    precio: 1000,
    nombre : "hp",
},
{
    marca: "lenovo",
    precio: 2500,
    nombre : "monito",
},

]

for( o=0;o<laptop.length;o++){
    console.log(laptop[o].marca);
}


//map 

const productos = [
    {
    name: "tv",
    precio : 4800,
    },
    {
    name: "celular",
    precio : 2800,
    },
    {
    name: "monitor",
    precio : 1200,
    },
]
 productos.map((productos,index)=>{
    console.log("indice",index);
    console.log("productos",productos.price);
 })

 for( o=0;o<productos.length;o++){
    console.log(productos[o].precio);
}



// while tambien sirve para poder hacer una acion en un numero determinado de veces

let contador = 0;
while(contador<5){
    console.log("contador",contador);
    contador++;
}

//escribir un progama que pisa al usuario una palabra y la muestre 10 veces en pantalla

const Imprimir10veces = (palabra)=>{
    let contador =0;
    while(contador <20){
        console.log(palabra);
        contador++;
    }
}
Imprimir10veces("hola chicos");


// foreach

const numeros2=[1,2,3,4,5,6,7,8,9,10];

numeros2.forEach((numeros2,index) => {
    // console.log("inicio",index);
    console.log("que hace",numeros2);
    
});


const productos2 =[
    {
        name:"guillermo",
        price:4000,
    },
    {
        name:"abrahan",
        price:2000,
    },
    {
        name:"jorge",
        price:6000,
    },
    {
        name:"jesus",
        price:5000,
    }
];

productos2.forEach((productos2)=>{
    console.log(productos2.name);
}
)

productos2.forEach((productos2))