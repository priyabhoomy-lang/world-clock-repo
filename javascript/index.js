function updateTime() {
  let city1Element = document.getElementById("city1");
  let city1DateElement = city1Element.querySelector(".date");
  let city1TimeElement = city1Element.querySelector(".time");

  let city2Element = document.getElementById("city2");
  let city2DateElement = city2Element.querySelector(".date");
  let city2TimeElement = city2Element.querySelector(".time");

  let losAngelesTimeDate = moment().tz("America/Los_Angeles");
  let parisTimeDate = moment().tz("Europe/Paris");

  city1DateElement.innerHTML = losAngelesTimeDate.format("MMMM Do YYYY");
  city1TimeElement.innerHTML = losAngelesTimeDate.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  city2DateElement.innerHTML = parisTimeDate.format("MMMM Do YYYY");
  city2TimeElement.innerHTML = parisTimeDate.format(
    "h:mm:ss [<small>]A[<small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
