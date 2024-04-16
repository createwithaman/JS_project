const form = document.querySelector('form')

form.addEventListener('submit',(evt)=>{
 evt.preventDefault()

const height =  parseInt(document.querySelector('#height').value)
const weight =  parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `<br/>Please Give a valid height `
} else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `<br/>Please Give a valid weight `
} else {
   const bmi =  (weight / ((height*height)/10000).toFixed(2))

   if (bmi < 18.6) {
    results.innerHTML =  `<br/><div> Under Weight BMI =  ${bmi}</div>`
   } 
   else if (bmi >= 18.6 && bmi <= 24.9 ){
    results.innerHTML =  `<br/><div> Normal Range BMI =  ${bmi}</div>`
   } else {
    results.innerHTML =  `<br/><div> Over Weight  BMI =  ${bmi}</div>`
   }

   
}
})