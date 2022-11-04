// // existe dentro de js el document ---este atributo me permite obtener documentos de html 
// // obtener elementos segun el nombre de la etiqueta tag=etiqueta

// const inputs = document.getElementsByTagName("input");
// console.log("input" , inputs); 
// // recordemos que input es un html colecction para poder recorrelo debemos convertirlo en un array 
// // array.from esto convierte en un html colection a un array 


// // bucle map

// // newInputs.map((newInput)=>{
// //     console.log("nueva forma", newInput.value);
// //  })

// // convertir a array
// const newInputs = Array.from(inputs);
// console.log('newinput',newInputs);



// // bucle for
// for(let i=0; i< inputs.length ; i++){
//     console.log('input' , inputs[i].value);
// }


// // -----------------------------------------------


// const password = document.getElementById('input-password');

// console.log('password', password);

// // vamos a acceder al elemento seleccionado al value de mi input

// // password.style.backgroundColor = "#000";
// // password.style.color = "#fff";
// // password.style.fontSize = "15px";

// const email = document.getElementById('input-email');

// // email.style.backgroundColor = "red";
// // email.style.fontSize = "20px";


// const name = document.getElementById('name');

// // name.style.backgroundColor = "yellow";
// // name.style.fontSize = "30px";

// const last_name = document.getElementById('last_name');

// // last_name.style.backgroundColor = "blue";
// // last_name.style.fontSize = "40px";



// // const lastName = document.getElementsByClassName("last_name")

// // lastName.style.backgroundColor = "yellow"


// const inputsName =document.getElementsByClassName("last_name");
// console.log(inputsName);

// const inputName = Array.from(inputsName);
// console.log(inputName);


// inputName.forEach((input)=>{
//     console.log(input.value)
// })


const form =document.querySelector('form')
console.log(form)

const input2 = document.querySelectorAll('input')
console.log(input2)


input2.forEach((input)=>{
    console.log(input.value)
})


