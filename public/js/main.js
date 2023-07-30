document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const princessName = document.querySelector('input').value
    try{
        const response = await fetch(`https://princess-names-api-6378560d194e.herokuapp.com/api/${princessName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data
    }catch(error){
        console.log(error)
    }
    
}
