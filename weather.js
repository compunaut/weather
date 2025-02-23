async function fetchWeather() {
    const response = await fetch('https://api.weather.gov/gridpoints/LWX/96,70/forecast');
    const data = await response.json();
    const temperature = data.properties.periods[0].temperature;
    const precipitation = data.properties.periods[0].shortForecast;
    const weatherElement = document.getElementById('weather');

    let emoji = '';
    if (precipitation.includes('Rain')) {
        emoji = '🌧️';
    } else if (precipitation.includes('Cloud')) {
        emoji = '☁️';
    } else if (precipitation.includes('Sunny')) {
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
