const express = require('express');
const app = express()
const port = 3000

// app.get((req, res) => {
//   res.send(
//     '<h1>Hello! This is an actual response. This is my webpage!</h1>')
// })

app.get('/', (req, res) => {
    res.send('This is the Rootpage or Homepage if you like')
})
app.get('/cats', (req, res) => {
    res.send('MEOW')
})
app.post('/cats', (req, res) => {
    res.send('Post request sent from Postman most likely')
})
app.get('/dogs', (req, res) => {
    res.send('WOOF')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})