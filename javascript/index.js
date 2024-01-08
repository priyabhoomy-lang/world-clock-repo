function updateTime() {
  let city1Element = document.getElementById("city1");
  if (city1Element) {
    let city1DateElement = city1Element.querySelector(".date");
    let city1TimeElement = city1Element.querySelector(".time");
    let losAngelesTimeDate = moment().tz("America/Los_Angeles");
    city1DateElement.innerHTML = losAngelesTimeDate.format("MMMM Do YYYY");
    city1TimeElement.innerHTML = losAngelesTimeDate.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let city2Element = document.getElementById("city2");
  if (city2Element) {
    let city2DateElement = city2Element.querySelector(".date");
    let city2TimeElement = city2Element.querySelector(".time");
    let parisTimeDate = moment().tz("Europe/Paris");
    city2DateElement.innerHTML = parisTimeDate.format("MMMM Do YYYY");
    city2TimeElement.innerHTML = parisTimeDate.format(
      "h:mm:ss [<small>]A[<small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

let citySelected = document.querySelector("#city");
citySelected.addEventListener("change", updateCity);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}
