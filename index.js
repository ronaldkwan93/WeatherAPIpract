let weather = {
    "data": [{
           "date": "11-03-2024",
           "dailyMax": 32.4,
           "dailyMin": 22.2,
           "forecast": "cloudy",
           "forecastImg": "https://worldweather.wmo.int/images/20.png"
        },
            {
        "date": "12-03-2024",
        "dailyMax": 55.5,
        "dailyMin": 33.3,
        "forecast": "Sunny",
        "forecastImg": "https://worldweather.wmo.int/images/11.png"
        }
    ]
}

for (let i=0; i< weather.data.length; i++ ) {
    let div = document.createElement('div')
    if (`${weather.data[i].dailyMax}` > 35) {
        div.className += " extreme-heat"
        div.innerHTML = 
        `<p>Date: ${weather.data[i].date}</p>
        <p>Max: ${weather.data[i].dailyMax}C</p>
        <p>Min: ${weather.data[i].dailyMin}C</p>
        <p>Forcast: ${weather.data[i].forecast}</p>
        <img src="${weather.data[i].forecastImg}">
        <p class="extreme-heat-message">Extreme heat warning</p>`;
    } else {
        div.innerHTML = 
        `<p>Date: ${weather.data[i].date}</p>
        <p>Max: ${weather.data[i].dailyMax}C</p>
        <p>Min: ${weather.data[i].dailyMin}C</p>
        <p>Forcast: ${weather.data[i].forecast}</p>
        <img src="${weather.data[i].forecastImg}">`
    }
    let container = document.getElementById("container");
    container.appendChild(div);
}

// let dMax = document.createElement('p');
// dMax.textContent = `Max: ${weather.data.dailyMax}C`
// let maxDiv = document.getElementById('dailyMax');
// maxDiv.appendChild(dMax);

// let dMin = document.createElement('p');
// dMin.textContent = `Min: ${weather.data.dailyMin}C`
// let minDiv = document.getElementById('dailyMin');
// minDiv.appendChild(dMin);

// let dForcast = document.createElement('p');
// dForcast.textContent = `Forcast: ${weather.data.forecast}`
// let forcastDiv = document.getElementById('dailyForcast');
// forcastDiv.appendChild(dForcast);

// let img = document.createElement('img')
// img.setAttribute("src", weather.data.forecastImg)
// let ForcastImg = document.getElementById('forcastImg');
// ForcastImg.appendChild(img)

function toggleHeatWarning() {
    let isChecked = document.getElementById("toggleWarning").checked;
    let warnings = document.getElementsByClassName("extreme-heat-message");
    for (let i = 0; i < warnings.length; i++) {
        warnings[i].style.display = isChecked ? "block" : "none";
    }
    let extremeHeatDivs = document.getElementsByClassName("extreme-heat");
    for (let i = 0; i < extremeHeatDivs.length; i++) {
        if (isChecked) {
            extremeHeatDivs[i].classList.add("extreme-heat");
        } else {
            extremeHeatDivs[i].classList.remove("extreme-heat");
        }
    }
}