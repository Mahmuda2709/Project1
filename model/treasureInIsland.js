
let locations = ["deserted well", "abandoned house", "hidden cave"]
let treasureSpot = "hidden cave"
let treasureFounder
let maplocation = "abandoned house"

function listLocations(){
    return locations
}


function findTreasure() {
    ///treasureSpot = locations[Math,floor(Math.random()*locations,length)]

}


function chooseSpots(location) {
    console.log("treasureFounder moved to", location)
    treasureFounder = location

}

function searching() {
    return(treasureSpot === treasureFounder)
}

function findclue(location){
    if (location === maplocation){
        return "treasure in hidden cave"
    }

}

module.exports = {
    listLocations,
    findTreasure,
    chooseSpots,
    searching,
    findclue
}






// searching treasure
//console.log ("Searching the treasure. This is an abondoned island. People lived here 100 years ago. Now nobody live there. But there are treasure in island. It might be in a hidden cave or abondoned house or a deserted well.")
//onsole.log ("Who finds treasure first wins all the treasure. One person can try one time & will get 36 hours" )
//findTreasure()
//console.log('Start searching', listLocations())
//chooseSpots(locations[0])
//let found = searching()
//if (found){ 
//   console.log("Found the treasure")
//}
//else{
 //   console.log("did not found the treasure")
   // console.log("search another location")
//}