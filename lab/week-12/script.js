
// to get data points I want from the API

let extractedData;

fetch("https://api.weather.gov/gridpoints/TOP/31,80/forecast") 
    .then(response => response.json())
    .then(data => {
        const wantedPeriods = data.properties.periods.slice(0, 11);
        extractedData = wantedPeriods.map(period => ({
            name: period.name,
            startTime: period.startTime,
            shortForecast: period.shortForecast,
            temperature: period.temperature,
            windSpeed: period.windSpeed
        }));

// viz on the right side 

const weatherChartContainer = document.getElementById('weatherChart');

extractedData.forEach(period => {
    const barHeight = period.temperature;
    const barElement = document.createElement('div');
    barElement.classList.add('bar');
    barElement.style.height = barHeight + '5px';
    weatherChartContainer.appendChild(barElement);
});

// to put the data on the screen on the left

const visualizationContainer = document.querySelector('.left-side');

extractedData.forEach(period => {
    const periodElement = document.createElement('div');
    periodElement.classList.add('period');
    periodElement.innerHTML = `
        <h3>${period.name}</h3>
        <p>Start Time: ${period.startTime}</p>
        <p>Short Forecast: ${period.shortForecast}</p>
        <p>Temperature: ${period.temperature}</p>
        <p>Wind Speed: ${period.windSpeed}</p>
    `;
    visualizationContainer.appendChild(periodElement);
    });
})
