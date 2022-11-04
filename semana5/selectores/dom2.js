// crear elementos 
document.write('hoola gentee');
document.write('hoola gentee con temblores');



 const input = document.querySelectorAll('input');
//  obtener mi contenedor
const contenedor = document.querySelector('#container-list');
const ul = document.createElement('ul');

input.map((element)=>{
const li = document.createElement('li');
const elementText = document.createTextNode(element.value);
li.appendChild(elementText);
ul.appendChild(ul);
})

contenedor.appendChild(ul);









// const li = document.createElement('li');
// li.textContent="joel" 