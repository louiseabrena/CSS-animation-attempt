var nightBtn = document.getElementById("changeNight");
var dayBtn = document.getElementById("changeDay");
var nytSky = document.getElementById("nightSky");
var daySky = document.getElementById("daySky");

daySky.style.display = "none";
nytSky.style.display = "none";

nightBtn.onclick = showNight;
dayBtn.onclick = showDay;

function showNight() {
  nytSky.style.display = "block";
  daySky.style.display = "none";
}

function showDay() {
  daySky.style.display = "block";
  nytSky.style.display = "none";
}
