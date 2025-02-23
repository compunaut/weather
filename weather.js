fetchWeather();

async function fetchWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Baltimore&appid=YOUR_API_KEY&units=imperial');
    const data = await response.json();
    const temperature = data.main.temp;
    const precipitation = data.weather[0].description;
    const weatherElement = document.getElementById('weather');

    let emoji = '';
    if (precipitation.includes('rain')) {
        emoji = '🌧️';
    } else if (precipitation.includes('cloud')) {
        emoji = '☁️';
    } else if (precipitation.includes('sun')) {
        emoji = '☀️';
    } else {
        emoji = '❓';
    }

    weatherElement.innerHTML = `
        <p>Temperature: ${temperature}°F</p>
        <p>Precipitation: ${precipitation} ${emoji}</p>
    `;
}

fetchWeather();
setInterval(fetchWeather, 3600000); // Update every hour