//write a color picker with 4 variables

// document.getElementById('green').onclick = partyGreen
// document.getElementById('cyan').onclick = partyCyan
// document.getElementById('purple').onclick = partyPurple
// document.getElementById('red').onclick = partyRed

// console.log('hello')

// function partyGreen() {
//     document.querySelector('#color-picker-bgr').style.backgroundColor = 'green'
//     document.querySelector('#color-picker-bgr').style.color = 'white'

// }

// function partyCyan() {
//     document.querySelector('#color-picker-bgr').style.backgroundColor = 'cyan'
//     document.querySelector('#color-picker-bgr').style.color = 'white'


// }

// function partyPurple() {
//     document.querySelector('#color-picker-bgr').style.backgroundColor = 'rebeccapurple'
//     document.querySelector('#color-picker-bgr').style.color = 'white'
// }

// function partyRed() {
//     document.querySelector('#color-picker-bgr').style.backgroundColor = 'red'
//     document.querySelector('#color-picker-bgr').style.color = 'white'
// }




//////////////////////////


//calculator with 4 diff operations

// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#pumpkintwo').addEventListener('click', jumanji)
// document.querySelector('#pumpkinthree').addEventListener('click', add9)
// document.querySelector('#pumpkinfour').addEventListener('click', substract2)

// function resultPlace() {
//     document.querySelector('#resultPlace').innerText = total
// }

// function makeZero() {
//     total = 0
//     resultPlace()

// }

// function jumanji() {
//     total = total + 3
//     resultPlace()
// }

// function add9() {
//     total = total + 9
//     resultPlace()
// }

// function substract2() {
//     total = total - 2
//     resultPlace()
// }




//////////////////////

//bachelor app

//select images
const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

//select tags and trigger click on them
document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext() {
    console.log('hi there')
    claire.classList.add('hidden')
    sharleen.classList.add('hidden')
    andi.classList.toggle('hidden')
}
function claireNext() {
    console.log('hi there')
    andi.classList.add('hidden')
    sharleen.classList.add('hidden')
    claire.classList.toggle('hidden')
}
function sharleenNext() {
    console.log('hi there')
    claire.classList.add('hidden')
    sharleen.classList.toggle('hidden')
    andi.classList.add('hidden')
}