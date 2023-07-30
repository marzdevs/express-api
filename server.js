const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.use('/static', express.static('public'))

const Princesses = {
    'snow white':{
        'film': 'Snow White and the Seven Dwarfs',
        'age': 14,
        'enemy':'The Evil Queen'
    },
    'ariel':{
        'film': 'The Little Mermaids',
        'age': 16,
        'enemy':'Ursula'
    },
    'rapunzel':{
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
    const princessName = request.params.princessName.toLowerCase()
    if(Princesses[princessName]){
        response.json(Princesses[princessName])
    }else{
        response.json(Princesses['rapunzel'])
    }
})

// listen on port 8000
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch  it!`)
})