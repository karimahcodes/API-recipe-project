// let main = document.getElementById('main')


// let name = "Karimah"
// let greeting = "hey there"


// const h1 = document.createElement('h1')
// main.appendChild(h1);
// h1.innerText = `${greeting}, ${userName}`

// const button = document.createElement('button')
// main.appendChild(button)



let button = document.querySelector("button").addEventListener('click', getRandomMeal)

function getRandomMeal(){

    const randomApiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

    fetch(randomApiUrl)
        .then(res => res.json()) //send a request and expect a json response to be returned
        .then(data => {
            console.log(data) //display the data response in the console
        })
        .catch(err=>{
            console.log(err) //or report the error in the console
        })
}