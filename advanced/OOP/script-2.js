console.log('hithere')

function houseOne() {
    console.log('paper delivered to house one')
}

function houseTwo(callback) {
    setTimeout(() => {
        console.log('paper delivered to house two')
        callback()
    }, 3000)
}

function houseThree() {
    console.log('paper delivered to house three')
}
houseOne()
houseTwo(houseThree)