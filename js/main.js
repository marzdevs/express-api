document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://princess-names-api-6378560d194e.herokuapp.com/${princessName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}