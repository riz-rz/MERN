const calcuForm = document.querySelector(".calcu-form")
const calcuInput = document.querySelector("#calcu-input")


console.log(calcuForm, calcuInput);

calcuForm.addEventListener("submit",(e)=>{
    e.preventDefault()
})


// const appendValue = (value)=>{
//     calcuInput.value += value
// }


const evaluateTheInput =()=>{
    calcuInput.value = eval(calcuInput.value)
}

const emptyTheInput =()=>{
    calcuInput.value=""
}


//or 


const butnSeven = document.getElementById("b7");
const butnEight = document.getElementById("b8");
const butnNine = document.getElementById("b9");
const butnStar = document.getElementById("b*");
const butnFour = document.getElementById("b4");
const butnFive = document.getElementById("b5");
const butnSix = document.getElementById("b6");
const burnSlash = document.getElementById("b/");
const butnOne = document.getElementById("b1");
const butnTwo = document.getElementById("b2");
const butnThree = document.getElementById("b3");
const butnMinus = document.getElementById("b-");
const butnpoint = document.getElementById("b.");
const butnZero = document.getElementById("b.");
const butnPlus = document.getElementById("b+");

butnSeven.addEventListener("click",(value)=>{
    calcuInput.value += 7
})
butnEight.addEventListener("click",(value)=>{
    calcuInput.value += 8
})
butnNine.addEventListener("click",(value)=>{
    calcuInput.value += 9
})
butnStar.addEventListener("click",(value)=>{
    calcuInput.value += '*'
})
butnFour.addEventListener("click",(value)=>{
    calcuInput.value += 4
})
butnFive.addEventListener("click",(value)=>{
    calcuInput.value += 5
})
butnSix.addEventListener("click",(value)=>{
    calcuInput.value += 6
})
burnSlash.addEventListener("click",(value)=>{
    calcuInput.value += '/'
})
butnOne.addEventListener("click",(value)=>{
    calcuInput.value += 1
})
butnTwo.addEventListener("click",(value)=>{
    calcuInput.value += 2
})
butnThree.addEventListener("click",(value)=>{
    calcuInput.value += 3
})
butnMinus.addEventListener("click",(value)=>{
    calcuInput.value += '-'
})
butnpoint.addEventListener("click",(value)=>{
    calcuInput.value += '.'
})
butnZero.addEventListener("click",(value)=>{
    calcuInput.value += 0
})
butnPlus.addEventListener("click",(value)=>{
    calcuInput.value += '+'
})
