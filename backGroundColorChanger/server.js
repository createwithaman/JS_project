const buttons = document.querySelectorAll('.button')
const body  = document.querySelector("body")


buttons.forEach((button)=>{
    button.addEventListener('click',(evt)=>{
        if(evt.target.id === 'grey'){
            body.style.backgroundColor = evt.target.id
        }  if (evt.target.id === 'white'){
            body.style.backgroundColor = evt.target.id
        }
         if (evt.target.id === 'yellow'){
            body.style.backgroundColor = evt.target.id
        }
         if (evt.target.id === 'blue'){
            body.style.backgroundColor = evt.target.id
        }
    })
})