// crearemos nuestra funcion 

function CalMenu (){
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiera ejecutar: \r\n 1.suma. \r\n 2.promedio de examenes \r\n 3.calcular el area de un triangulo  ")
    );
if(isNaN(nro_ejercicio)){
    alert("por favor ingresa valores")
}else{
    MenuEjercicios(nro_ejercicio)
}

}

function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("ingresa el valor 1 a sumar"));
            let valor2= parseFloat(prompt("ingresa el valor 2 a sumar"));
            alert(ej1_sumarValores(valor1,valor2));
            break;
        case 2:
            let ex1 =parseFloat(prompt("ingrese la primera nota"));
            let ex2 =parseFloat(prompt("ingrese la segunda nota"));
            let ex3 =parseFloat(prompt("ingrese la tercera nota"));
            let ex4 =parseFloat(prompt("ingrese la cuarta nota"));
            alert(ej2_CalcularPromedio(ex1,ex2,ex3,ex4));
            break;
        case 3:
            let base =parseFloat(prompt("ingrese la base"));
            let altura =parseFloat(prompt("ingrese la altura"));
            alert(ej3_CalcularArea(base,altura));
            break;

    }
    
}

function ej1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return"por favor ingrese valores";
        
    }
    return a+b; 
}

function ej2_CalcularPromedio(ex1,ex2,ex3,ex4){
   if(isNaN(ex1)|| isNaN(ex2) || isNaN(ex3) || isNaN(ex4)){
   return"por favor ingrese valores";
   
  }else{
    suma = ex1 +ex2 +ex3 +ex4;
    return suma/4;
}
}


function ej3_CalcularArea(base,altura){
    if(isNaN(base) || isNaN(altura)){
        return"por favor ingrese valores";
        
    }else{
        return"el area del rectangulo es :", base*altura;
    } 
}
    
