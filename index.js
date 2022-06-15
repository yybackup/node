const express = require('express')
const app = express()
const port = 3000

let databaseIndex = 3;
DATABASE = [
  {
    id: 1,
    name: 'Metal Gear',
    console: 'PS',
    year: 1990,
    multiplayer: false
  },
  {
    id: 2,
    name: 'God of War',
    console: 'PS',
    year: 1995,
    multiplayer: false
  },
  {
    id: 3,
    name: 'Fortnite',
    console: 'PC',
    year: 2015,
    multiplayer: true
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/videogames', (req, res) => {
  res.send(DATABASE)
} )

app.get('/videogames/:gameID', (req, res) => {
  const Id = req.params.gameID
  const result = DATABASE.find(game=>game.id == Id)
  res.send(result)
})


// app.get('/videogames/:gameID',(req,res)=>{
//   const result = DATABASE.find(game=>game.id == req.params.gameID)
//   res.send(result)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});