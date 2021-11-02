let treasureInIsland = require('./treasureInIsland')


// searching treasure

console.log ("Searching the treasure. This is an abondoned island. People lived here 100 years ago. Now nobody live there. But there are treasure in island. It might be in a hidden cave or abondoned house or a deserted well.")
console.log ("Who finds treasure first wins all the treasure. One person can try one time & will get 36 hours" )

treasureInIsland.findTreasure()

let locations = treasureInIsland.listLocations()
console.log('Start searching', locations)
treasureInIsland.chooseSpots(locations[0])
let clue = treasureInIsland.findclue(locations[1])
console.log ("clue", clue)
let found = treasureInIsland.searching()
if (found){ 
    console.log("Found the treasure")
}
else{
    console.log("did not found the treasure")
    console.log("search another location", locations[1])
}