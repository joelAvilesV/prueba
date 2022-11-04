const btnPrueba = document.querySelector('#btn-prueba');
// atrape el boton 


btnPrueba.onclick = function(event){
    console.log("click en el boton")
    console.log(event)
    swal.fire("hola mundo ")

}





// 
const btnPregunta = document.querySelector('#btn-pregunta')

btnPregunta.onclick = function(){
    swal.fire('alguna pregunta' , "aca el texto en pregunta en cuestion ")
}


const btnError = document.querySelector('#btn-error')


function showAlert(icon, title ,text){
    Swal.fire({
    icon,
    title,
    text,
    footer: "<a href = 'https://google.com'> Link de footer"
})
}

btnError.onclick = function(event){
  showAlert("error" , "hubo un error", "email o password erroneos ")
}



const btnWarning = document.querySelector('#btn-peligro')


function showAlert(icon, title ,text){
    Swal.fire({
    icon,
    title,
    text,
})
}

btnWarning.onclick = function(event){
  showAlert("warning" , "Cuidado!!! ", "esta seguro ? ")
}


///

const btnAlertBotones = document.querySelector('#btn-alert-botones')
btnAlertBotones.onclick= function(){
    Swal.fire({
        title: "Alerta",
        text: "Texto de Alerta",
        showDenyButton:true,
        showCancelButton: true,
        confirmButtonText: "guardar",
        denyButtonText:"negar"
    }).then((resultado)=>{
        console.log("resultado", resultado);
        if(resultado.isConfirmed){
            showAlert("success", "confirmado","se confirmo la operacion");
            console.log("marco la confirmacion ")
        }
        if(resultado.isDenied){
            console.log("se nego la operacion")
        }
    })
    
}


const btnAlertaImagen =  document.querySelector("#btn-alerta-imagen")
const urlMarvel ="https://www.cinemascomics.com/wp-content/uploads/2022/02/villanos-marvel-comics-960x720.jpg"


btnAlertaImagen.onclick = function(){
    Swal.fire({
        title:"marvel",
        text: "alerta con imagen",
        imageUrl: urlMarvel,
        imageWidth : 200,
        imageHeight: 200,
    })
}


const btnAlertaCustom = document.querySelector("#btn-alerta-custom")

    btnAlertaCustom.onclick = function(){
     Swal.fire({
    title:"custom Alert",
    text:"Alerta personalizada",
    background : ` url(${urlMarvel})`,
    color:'#fff',

 })
}

 const btnAlertInputs = document.querySelector("#btn-alerta-inputs")

 btnAlertInputs.onclick=function(){
         Swal.fire({
        title: "input para email",
        input: "email",
        inputLabel :"ingrese su correo",
        inputPlaceholder:"el correo debe se rvalido",
        
    }).then((resultado)=>{
        console.log(resultado.value)
    })
}


const paises = document.querySelector("#select-oprtiones")

//onchange sirve para detectar si hay un cambio en mi elemento

paises.onchange = function(event){
    const{value,options} =event.target;

    console.log(value)
    const index = options.selectedIndex;
    console.log("index", index)
    console.log("texto",  options[index]-test);
}


const usuario ={
    nombre : "pepe",
    edad : 30,
    direccion: {
        calle:"calle victoria",
        numero: 123,
        ciudad:"arequipa"
    }
}


const{ nombre , apellido, edad , direccion } = usuario;
console.log(direccion)