const express = require('express')
const treasureInIsland = require('./model/treasureInIsland')

const app = express()
const port = 3000

//const{ listLocations,
//  findTreasure,
//  chooseSpots,
//  searching,
//  findclue} = require('./treasureInIsland')

app.get('/', (req, res) => {
    let instructions = 
    `Welcome to the treasure island!
    You have to find out the treasure, to find out the visit/findTreasure endpoint
    Once you can there you can find the locations by /listLocation
    you can "/chooseSpots" to choose spots one location to another location
    use "/searching" to search your location
    use "/findclue" for one step to another step
    Good luck! Happy Treasure Finding!
    `
    res.send(instructions)
})

app.get('/listLocations',(req, res) => {
  res.json(treasureInIsland.listLocations())
})
  

app.get('/findTreasure', (req,res) => {
  treasureInIsland.findTreasure()
  res.send('Treasure founder looking for a location!\n Happy Treasure finding\n')
})


app.get('/chooseSpots', (req,res) => {
  console.log('chooseSpots is called with ', req.query)
  let location = req.query.location
  treasureInIsland.chooseSpots(location)
  res.send('you have to chooseSpot ' + location + '\n')
})


app.get('/searching', (req,res) => {
  let message
  let found = treasureInIsland.searching()
  if (found) {
    message = 'You just found the clue!'
  }
  else {
    message = 'You search and find no-one!'
  }
  res.send(message + '\n')

})

app.get('/findclue', (req,res) => {
  let message
  let getclue = treasureInIsland.findclue()
  if (getclue) {
    message = 'you will get clue in the kitchen top'
  }
  else {
    MessageChannel
  }
res.send(findclue())
})






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
