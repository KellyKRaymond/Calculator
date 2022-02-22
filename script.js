let numbers = document.querySelectorAll('.number')
let calculatingline = document.querySelector('.calculating-line')
let operator = document.querySelectorAll('.operator')
let deleteBox = document.querySelector('#goAway')
let equalsBox = document.querySelector('#equals')

function inputChange(e){
let targetElement = e.target //target your click 
let buttonValue = targetElement.innerText  // grabbing your value inside your element 
calculatingline.innerText += buttonValue  // where I click on the number two the number two appears in my calculating line 
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

function calculating(screenItems) {
    for(let i = 0; i <screenItems.length; i++){
        if(screenItems[i] === '+'){
            let addition = screenItems.split('+')
            return(parseInt(addition[0])+parseInt(addition[1]))
        } else if(screenItems[i] === '-'){
                let subtraction = screenItems.split('-')
                return(parseInt(subtraction[0])-parseInt(subtraction[1]))
            } else if(screenItems[i] === '*'){
                    let multiply = screenItems.split('*')
                    return(parseInt(multiply[0])*parseInt(multiply[1]))
            } else if(screenItems[i] === '/'){
                    let divid = screenItems.split('/')
                    return(parseInt(divid[0])/parseInt(divid[1]))
            }
    }
}

function equalsButton(){
    calculatingline.innerText = calculating(calculatingline.innerText)
}
equalsBox.addEventListener('click', equalsButton)

// addded text to the tiles for decimal precent and delete button - changed delete I had to 'clear' 
// still need to go back in and add the functionality to the new keys and format it more. 