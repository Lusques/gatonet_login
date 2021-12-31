const checkbox = document.querySelectorAll('label');
const checkConectado = document.querySelector('#manterConectado');
const checkRobo = document.querySelector('#souRobo');
const conectadoCheckbox = document.querySelector('.login .checkbox');
const roboCheckbox = document.querySelector('.subscribe .checkbox')

function souRoboCheck() {
  if(checkRobo.checked){
    roboCheckbox.classList.add('checkbox__active')
  }
  else{
    roboCheckbox.classList.remove ('checkbox__active')
  }
}

function manterConectadoCheck() {
  if(checkConectado.checked){
    conectadoCheckbox.classList.add('checkbox__active');
  }
  else{
    conectadoCheckbox.classList.remove('checkbox__active');
  }
}


function togleCheckbox(item) {
  let atributo = item.getAttribute('for')
  atributo == 'souRobo'? souRoboCheck(): '';
  atributo == 'manterConectado'? manterConectadoCheck(): '';
}

checkbox.forEach((item) =>{
  item.addEventListener('click', ()=>{
    togleCheckbox(item);
  })
})




















// checkbox.forEach((item)=>{
//   console.log(item)
//   item.addEventListener('click', () => {
//     checkRobo.checked ? alert('checado'): alert('não');
//   })
// })
// console.log(checkRobo)
// checkRobo.addEventListener('click', () =>{
//   checkRobo.checked ? alert('checado'): alert('não');
// })
