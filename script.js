// const btn = document.createElement('button')
// btn.innerHTML = 'click here'
// document.body.appendChild(btn)

// const holdoOutterTiles = document.getElementById("tile")
// holdoOutterTiles.addEventListener('click')

// let clicked = true;

// for loop that runs over all my tiles and picks the operator or value 

let numbers = document.querySelectorAll('.number')
let btn = document.querySelectorAll('btn')
let calculatingline = document.querySelector('.calculating-line')
let operator = document.querySelectorAll('.operator')
let deleteBox = document.querySelector('#goAway')

function inputChange(e){
let targetElement = e.target //target your click 
let buttonValue = targetElement.innerText  // grabbing your value inside your element 
calculatingline.innerText += buttonValue 
}
function allEventListeners(arrNums){
    for(let i = 0; i < arrNums.length; i++){
        arrNums[i].addEventListener('click' ,inputChange)
    }
}
allEventListeners(numbers)
allEventListeners(operator)

function deleteThis(){
    calculatingline.innerText = ' ' 
}
deleteBox.addEventListener('click', deleteThis)