
const API_KEY = "YOUR_API_KEY";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        document.getElementById("error").textContent =
            "Please enter a city name!";
        return;
    }

    document.getElementById("loading").textContent = "Loading...";
    document.getElementById("error").textContent = "";
    document.getElementById("forecast").innerHTML = "";

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found!");
        }

        const data = await response.json();

        document.getElementById("city").textContent = data.name;
        document.getElementById("temp").textContent =
            Math.round(data.main.temp) + " °C";

        document.getElementById("description").textContent =
            data.weather[0].description;

        document.getElementById("humidity").textContent =
            data.main.humidity;

        document.getElementById("wind").textContent =
            data.wind.speed;

        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        await getForecast(data.coord.lat, data.coord.lon);

    } catch (error) {
        document.getElementById("error").textContent = error.message;
    } finally {
        document.getElementById("loading").textContent = "";
    }
}

async function getForecast(lat, lon) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Forecast unavailable!");
        }

        const data = await response.json();

        const forecastDiv = document.getElementById("forecast");

        const daily = data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        ).slice(0, 5);

        daily.forEach(day => {
            const date = new Date(day.dt_txt);
            const card = document.createElement("div");

            card.className = "forecast-card";

            card.innerHTML = `
                <h3>${date.toLocaleDateString("en", {
                    weekday: "short"
                })}</h3>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">
                <p>${Math.round(day.main.temp)} °C</p>
                <p>${day.weather[0].description}</p>
            `;

            forecastDiv.appendChild(card);
        });

    } catch (error) {
        document.getElementById("error").textContent = error.message;
    }
}

const API_KEY = "YOUR_API_KEY";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        document.getElementById("error").textContent =
            "Please enter a city name!";
        return;
    }

    document.getElementById("loading").textContent = "Loading...";
    document.getElementById("error").textContent = "";
    document.getElementById("forecast").innerHTML = "";

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found!");
        }

        const data = await response.json();

        document.getElementById("city").textContent = data.name;
        document.getElementById("temp").textContent =
            Math.round(data.main.temp) + " °C";

        document.getElementById("description").textContent =
            data.weather[0].description;

        document.getElementById("humidity").textContent =
            data.main.humidity;

        document.getElementById("wind").textContent =
            data.wind.speed;

        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        await getForecast(data.coord.lat, data.coord.lon);

    } catch (error) {
        document.getElementById("error").textContent = error.message;
    } finally {
        document.getElementById("loading").textContent = "";
    }
}

async function getForecast(lat, lon) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Forecast unavailable!");
        }

        const data = await response.json();

        const forecastDiv = document.getElementById("forecast");

        const daily = data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        ).slice(0, 5);

        daily.forEach(day => {
            const date = new Date(day.dt_txt);
            const card = document.createElement("div");

            card.className = "forecast-card";

            card.innerHTML = `
                <h3>${date.toLocaleDateString("en", {
                    weekday: "short"
                })}</h3>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">
                <p>${Math.round(day.main.temp)} °C</p>
                <p>${day.weather[0].description}</p>
            `;

            forecastDiv.appendChild(card);
        });

    } catch (error) {
        document.getElementById("error").textContent = error.message;
    }
}
