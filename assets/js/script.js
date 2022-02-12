// TODO: Declare any global variables we need
let headFlips = 0
let tailFlips = 0


// Todo; create any elements we need
let game = document.querySelector('#game')
let penny = document.createElement('img')
penny.src =  './assets/images/penny-heads.jpg'
penny.setAttribute('id', 'penny-image')
game.append(penny)


let controls = document.createElement('div')
controls.setAttribute('class', 'controls')
game.append(controls)


let flip = document.createElement('button')
flip.setAttribute('id', 'flip')
flip.textContent = 'Flip the penny'
controls.append(flip)

let clear = document.createElement('button')
clear.setAttribute('id', 'clear')
clear.textContent = 'Clear Scoreboard'
controls.append(clear)

let message = document.createElement('h3')
message.setAttribute('id', 'message')
message.textContent = 'let\s get rolling!'
game.append(message)




document.addEventListener('DOMContentLoaded', function () {

    let total = 0

    flip.addEventListener('click', function() {
        let flipHeads = Math.random() < 0.5

        if(flipHeads) {
            penny.src = './assets/images/penny-heads.jpg'
            headFlips++
            message.textContent = 'You flipped heads!'
        
        } else {
            penny.src = './assets/images/penny-tails.jpg'
            tailFlips++
            message.textContent = 'you flipped tails!'
        }
        let hScore = document.querySelector('#heads')
        hScore.textContent = headFlips

        let tScore = document.querySelector('#tails')
        tScore.textContent = headFlips
        total++

        let pHeads = Math.round(headFlips/total * 100)
        let ptails = Math.round(tailFlips/total * 100)

        let hPercent = document.querySelector('#heads-percent')
        hPercent.textContent = pHeads

        let tPercent = document.querySelector('#tails-percent')
        tPercent.textContent = ptails
        
    })


    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})


