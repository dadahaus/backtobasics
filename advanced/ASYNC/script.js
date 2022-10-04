console.log('hello')

function houseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 1')
        }, 1000)
    })
}

function houseTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 2')
        }, 3000)
    })
}

function houseThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 3')
        }, 2000)
    })
}

async function getPaid() {
    const houseOneWait = await houseOne()
    const houseTwoWait = await houseTwo()
    const houseThreeWait = await houseThree()
    console.log(houseOneWait)
    console.log(houseTwoWait)
    console.log(houseThreeWait)
}

getPaid()

async function getACuteDogPhoto() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data)
}
getACuteDogPhoto()