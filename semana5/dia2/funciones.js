// es un conjunto de soluciones o ejecuciones para poder realizar tareas 

// funcion expresiva 
function nombreDeLaFuncion(){
    // una vez declarada mi funcion todo el codigo que hagamos todo el codigo que hagamos dentro de este solo se ejecutara la llame.

}

nombreDeLaFuncion();



function sumar (numero1 , numero2){
    //primero convertir parametros a numeros 
    const converNumero1 = +numero1;
    const converNumero2 = +numero2;

    const suma = converNumero1 + converNumero2;
   

    console.log('es el resultado' , suma) ;
}

sumar(40,20);




const suma2 =(a,b)=>{
    return a+b

   

}
console.log("otra forma " , suma2)