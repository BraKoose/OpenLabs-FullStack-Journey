var welcomeMsg = function () {
    console.log('Hello Welcome to Node Koose')
}
var getInput = function (param, callback) {
    callback(param)
}

var start = function (callback) {
    callback()
}
start(welcomeMsg)

let look = function (dir) {
    if (dir === 'west') {
        console.log('There is a small mailbox here.')
        if (dir === 'east');
        {
            console.log('You are standing next a white house.')
        }
    }


}
let walk = function (dir) {
    if (dir === 'west') {
        console.log('Its is very dark, you are likely to be eaten by a grue!')
    }
    if (dir === 'south') {
        console.log('You are standing on the edge of a deep chasm')
    }
}

getInput('east', look)
getInput('west', walk)
getInput('south', walk)