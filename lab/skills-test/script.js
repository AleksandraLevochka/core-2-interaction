// to display forecast inside the circle

let extractedData;

fetch("https://api.weather.gov/gridpoints/OKX/34,38/forecast") 
    .then(response => response.json())
    .then(data => {
        const todayPeriod = data.properties.periods[0];
        extractedData = {
            name: todayPeriod.name,
            temperature: todayPeriod.temperature,
            shortForecast: todayPeriod.shortForecast
        };
    
        displayForecastDetails(extractedData);
 })

 function displayForecastDetails(data) {
 
    const nameElement = document.querySelector('.name');
    const temperatureElement = document.querySelector('.temperature');
    const shortForecastElement = document.querySelector('.short-forecast');

    nameElement.textContent = `Name: ${data.name}`;
    temperatureElement.textContent = `Temperature: ${data.temperature}`;
    shortForecastElement.textContent = `Forecast: ${data.shortForecast}`;
}


// "add" function

function add (number1, number2) {
    var result = number1 + number2;
    console.log(result);
}

// turning circle green through console

function makeItGreen() {
    var circle = document.querySelector('.circle'); 
    circle.style.backgroundColor = 'green';
}

// my recipe object

var recipe = {
    "name": "Pumpkin Oladushki",
    "preparation_time": "30 minutes",
    "difficulty_level": "4",

    "ingredients": [
        "400g Pumpkin",
        "2 Eggs",
        "5 tbl sp Flour",
        "1 t sp Sugar",
        "Oil for frying"
    ],

    "instructions": {
        1: "Grate the pumpkin on a fine grater.", 
        2: "Add pumpkin, eggs, flour, and sugar into a mixing bowl.",
        3: "Stir everything to obtain a creamy mass.", 
        4: "Fry in a heated frying pan, greased with vegetable oil, like regular pancakes. If they fall apart, add a bit more flour.",
        5: "Repeat until you run out of the mixture."
    },

    "notes": [
        "Serve with sour cream on the side."
    ],
};

console.log(recipe)






