import Forecast from "./Forecast";
import getGif from "./getGif";

const content = document.getElementById("forecast");
const zipInput = document.getElementById("zipCode");
const keyInput = document.getElementById("apiKey");
const weatherButton = document.getElementById("getWeatherButton")

let time = [];
let description = [];
let tempFeels = [];



function createAndAppendChild(parent, text) {
    let childElement = document.createElement("div");
    childElement.textContent = text;
    parent.appendChild(childElement);
};


async function getWeather(zip, key) {

    if (document.getElementById("title")) {
        for (let i = time.length; i >= 0; i--) { 
            if (document.getElementById(`forecast${i}`)) {
                document.getElementById(`forecast${i}`).remove();
                console.log(`Deleted forecast${i}`);

                delete document.getElementById(`forecast${i}`);
                delete time[i];
                delete description[i];
                delete tempFeels[i];
            };
        };

        document.getElementById("gif").remove();
        delete document.getElementById("gif");

        document.getElementById("title").remove();
        delete document.getElementById("title");

        time = [];
        description = [];
        tempFeels = [];
    };

    let newForecast = new Forecast(zip, key);

    await newForecast.weatherResult();
    let titleDiv = document.createElement("div");
    titleDiv.id = "title";

    let city = newForecast.city;
    createAndAppendChild(titleDiv, city);
    let sunrise = newForecast.sunrise;
    createAndAppendChild(titleDiv, sunrise);
    let sunset = newForecast.sunset;
    createAndAppendChild(titleDiv, sunset);

    content.appendChild(titleDiv);

    for (let i = 0; i <= newForecast.numberOfForecasts; i++) {
        let currentElement = document.createElement("div");  
        currentElement.id = `forecast${i}`;
        
        time.push(newForecast.time[i]);
        description.push(newForecast.description[i]);
        tempFeels.push(newForecast.tempFeels[i]);

        createAndAppendChild(currentElement, time[i]);
        createAndAppendChild(currentElement, description[i]);
        createAndAppendChild(currentElement, tempFeels[i]);
        
        content.appendChild(currentElement);
    };

    let gifDiv = document.getElementById("gifDiv");
    let img = document.createElement("img");
    img.src = getGif(newForecast.description[0].replace(/\s/g, ""));
};


weatherButton.addEventListener("click", (e) => {
    let zipValue = zipInput.value;
    console.log(zipValue);
    let keyValue = keyInput.value;
    console.log(keyValue);
    getWeather(zipValue, keyValue);
})