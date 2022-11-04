const carro ={
    color: "azul",
    motor: "1.6",
    modelo: "mustang",
    marca: "changan",
    nuevo: false,
};

console.table( carro);


const persona ={
    edad: 34 ,
    nombre : "joel",
    sexo: "masculino",
    talla : 1.85,
    estadoCivil:"casado",
    mayorEdad:true,
    donacion:true,
};

console.log("nombre" , persona.estadoCivil);
console.table(persona);

persona.nombre = "guillermo";
persona["profesion"] = "ingerniero";
persona["bailarin"] =true;
persona.nacionalidad = "ucarniano";



const oficina ={
    lugar:"cercado",
    tamaño : "mediana",
    apaEle : "laptop" ,
    abierto : true,

}

console.table(oficina);

oficina.costo = 1000;
persona.tamaño ="grande";


