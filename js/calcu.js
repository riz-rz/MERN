const calcuForm = document.querySelector(".calcu-form")
const calcuInput = document.querySelector("#calcu-input")


console.log(calcuForm, calcuInput);

calcuForm.addEventListener("submit",(e)=>{
    e.preventDefault()
})


const appendValue = (value)=>{
    calcuInput.value += value
}


const evaluateTheInput =()=>{
    calcuInput.value = eval(calcuInput.value)
}

const emptyTheInput =()=>{
    calcuInput.value=""
}