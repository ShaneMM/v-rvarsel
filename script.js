const apiKey = "94acf90176c50246c933fcfcbb362dc6"

function search() {

const city = document.getElementById("input").value
const countryCode = "NO"
const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`

const existingInfo = document.querySelectorAll(".info")
  existingInfo.forEach(element => element.remove())
  document.getElementById("input").value = '';

fetch(api)
    .then(response => response.json())
    .then(data => {
    console.log(data)


    const info = document.createElement('div')
    info.classList.add('info')

    info.innerHTML = `<p>${data.name}, ${countryCode}</p>
      <h1>${data.main.temp}°C</h1>
      <p>${data.weather[0].description}</p>
      <p>${data.main.temp_min}°C / ${data.main.temp_max}°C</p>`
    document.body.appendChild(info);
    })
}

document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      search();
    }
  });