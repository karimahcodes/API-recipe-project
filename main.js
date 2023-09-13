const button = document.querySelector("button").addEventListener('click', getRandomMeal);

function getRandomMeal() {

    const randomApiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

    fetch(randomApiUrl)
        .then(res => res.json()) //send a request and expect a json response to be returned
        .then(data => {
            console.log(data) //display the data response in the console
        })
        .catch(err => {
            console.log(err) //or report the error in the console
        });
}

const arrButton = document.querySelector('.arrButton');
arrButton.addEventListener('click', getArrabiata);

// Main is where we will display the ingredients.
const main = document.getElementById('main');

// Get arrabiata ingredients.
function getArrabiata() {

    const arrabiataURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

    fetch(arrabiataURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            // Check that the length of the array is greater than 0 as a general rule
            if (data.meals && data.meals.length > 0) {
                const meal = data.meals[0]

                for (let key in meal) {
                    if (meal.hasOwnProperty(key)) {
                        const value = meal[key]

                        if (key.includes('strIngredient') && value !== null && value !== "") {
                            let mealIngredientElement = document.createElement('ul')
                            let mealIngredientItem = document.createElement('li')
                            mealIngredientElement.appendChild(mealIngredientItem)
                            main.appendChild(mealIngredientElement)
                            mealIngredientItem.textContent = value
                        }

                    }
                }

            }
        })
        .catch(err => {
            console.log(err)
        })
}