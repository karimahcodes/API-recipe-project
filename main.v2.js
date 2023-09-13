const INGREDIENT_PREFIX = 'strIngredient';
const button = document.querySelector('button').addEventListener('click', getRandomMeal);

function getRandomMeal() {

    const randomApiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

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

// Adds the ingredient to the DOM.
function appendIngredient(ingredient) {
    const mealIngredientElement = document.createElement('ul');
    const mealIngredientItem = document.createElement('li');
    mealIngredientElement.appendChild(mealIngredientItem);
    main.appendChild(mealIngredientElement);
    mealIngredientItem.textContent = ingredient;
}

// Get arrabiata ingredients.
function getArrabiata() {

    const arrabiataURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';

    fetch(arrabiataURL)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // If there isn't at least one meal then return.
            if(data.meals && data.meals.length < 0) return;

            // Get the first meal.
            const meal = data.meals[0]
            // Convert the object's keys into an array of keys so we can loop through
            // each key.
            Object.keys(meal)
                .forEach((key) => {
                    const value = meal[key];
                    // If value is null or empty string it will evaluate to false b/c it's falsy.
                    if(key.includes(INGREDIENT_PREFIX) && value){
                        appendIngredient(meal[key]);
                    }
                });
        })
        .catch(err => {
            console.log(err)
        });
}