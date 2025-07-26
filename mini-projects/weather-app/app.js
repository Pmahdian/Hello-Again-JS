// Configuration
const API_KEY = 'your_api_key_here'; // Get from openweathermap.org
const DEFAULT_CITY = 'London';

// DOM Elements
const elements = {
    cityInput: document.getElementById('city-input'),
    searchBtn: document.getElementById('search-btn'),
    weatherInfo: document.getElementById('weather-info')
};

// Fetch Weather Data
async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        elements.weatherInfo.innerHTML = `
            <p class="error">${error.message}</p>
        `;
    }
}

// Display Weather Data
function displayWeather(data) {
    const { name, main, weather, wind } = data;
    
    elements.weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <img class="weather-icon" src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}">
        <p><strong>${Math.round(main.temp)}°C</strong> | ${weather[0].main}</p>
        <div class="details">
            <p>Humidity: ${main.humidity}%</p>
            <p>Wind: ${wind.speed} m/s</p>
            <p>Feels like: ${Math.round(main.feels_like)}°C</p>
        </div>
    `;
}

// Event Listeners
elements.searchBtn.addEventListener('click', () => {
    const city = elements.cityInput.value.trim();
    if (city) fetchWeather(city);
});

elements.cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = elements.cityInput.value.trim();
        if (city) fetchWeather(city);
    }
});

// Initialize
fetchWeather(DEFAULT_CITY);