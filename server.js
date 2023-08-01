const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

// any file in public folder will be served up. dont need an app.get or anything.
app.use(express.static('./public'))

const Princesses = {
    //snow white is an object
    'snow white':{
        'film': 'Snow White and the Seven Dwarfs',
        'age': 14,
        'enemy':'The Evil Queen'
    }, 
    'ariel':{
        'film': 'The Little Mermaid',
        'age': 16,
        'enemy':'Ursula'
    },
    'rapunzel':{
        'film': 'Tangled',
        'age': 18,
        'enemy':'Mother Gothel'
    }

}

// get request
app.get('/', (request, response) => {
    //direct url name
    response.sendFile(__dirname + '/public/index.html')
     
})

// send json
app.get('/api/:name', (request, response) =>{
    const princess  = request.params.name.toLowerCase()
    if(Princesses[princess]){
        response.json(Princesses[princess])
    }else{
        response.json(Princesses['rapunzel'])
    }
})

// listen on port 8000
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch  it!`)
})