const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "hiddenforGitHub";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault(); //forms have a default behaviour to refresh the page, this is done to avoid it
    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData)

        } catch (error) {
            console.error(error);
            displayError(error)
        }

    } else {
        displayError("Please enter a city ")
    }
})

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Could'nt fetch weather data")
    }
    return await response.json()
}

function displayWeatherInfo(data) {
    console.log(data)
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;
    card.textContent = "";
    card.style.display = "flex"

    const cityDisplay = document.createElement("h1")
    const tempDisplay = document.createElement("p")
    const humidityDisplay = document.createElement("p")
    const descDisplay = document.createElement("p")
    const weatherEmoji = document.createElement("p")

    cityDisplay.textContent = city;
    cityDisplay.classList.add(...cityDisplayClass);
    card.append(cityDisplay);

    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    tempDisplay.classList.add(...tempDisplayClass);
    card.append(tempDisplay);

    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add(...humidityDisplayClass);
    card.append(humidityDisplay);

    descDisplay.textContent = description
    descDisplay.classList.add(...descDisplayClass)
    card.append(descDisplay)

    weatherEmoji.textContent = getWeatherEmoji(id)
    weatherEmoji.classList.add(...weatherEmojiClass)
    card.append(weatherEmoji)
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️"
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️"
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️"
        case (weatherId >= 600 && weatherId < 700):
            return "❄️"
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️"
        case (weatherId === 800):
            return "☀️"
        case (weatherId >= 801 && weatherId < 810):
            return "☁️"
        default:
            return "❓"
    }

}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add(...errorDisplayClass)
    card.textContent = "";
    card.style.display = "flex";
    card.append(errorDisplay)
}



const cityDisplayClass = ["text-5xl", "font-bold", "mb-6", "text-[hsla(0,0%,0%,0.75)]"]
const tempDisplayClass = ["text-5xl", "font-bold", "mb-6", "text-[hsla(0,0%,0%,0.75)]"]
const humidityDisplayClass = ["text-2xl", "my-2.5", "font-bold", "mb-6"]
const descDisplayClass = ["text-2xl", "my-2.5", "italic", "font-bold", "text-3xl"]
const weatherEmojiClass = ["text-2xl", "my-2.5", "text-8xl"]
const errorDisplayClass = ["text-2xl", "my-2.5", "text-3xl", "font-bold", "text-[hsla(0,0%,0%,0.75)]"]