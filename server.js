const express = require('express')
const app = express()
const PORT = 8000

const Princesses = {
    'Snow White':{
        'film': 'Snow White and the Seven Dwarfs',
        'age': 14,
        'enemy':'The Evil Queen'
    },
    'Ariel':{
        'film': 'The Little Mermaids',
        'age': 16,
        'enemy':'Ursula'
    },
    'Rapunzel':{
        'film': 'Tangled',
        'age': 18,
        'enemy':'Mother Gothel'
    },

}
//get request
app.get('/', (request, response) => {
    //direct url name
    response.sendFile(__dirname + '/index.html')
})

// send json
app.get('/api/:princessName', (request, response) =>{
    const princessName = request.params.princessName
    if(Princesses[princessName]){
        response.json(Princesses[princessName])
    }else{
        response.json(Princesses['Rapunzel'])
    }
})

// listen on port 8000
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch  it!`)
})