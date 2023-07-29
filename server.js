const express = require('express')
const app = express()
const PORT = 8000

//get request
app.get('/', (request, response) => {
    //direct url name
    response.sendFile(__dirname + '/index.html')
})

// listen on port 8000
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}! You better go catch  it!`)
})