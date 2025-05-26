// Drivers, Engines, Chassis arrays with image paths
var drivers = [
  { name: "Ayrton Senna", score: 98, image: "images/senna.jpg" },
  { name: "Michael Schumacher", score: 97, image: "images/schumacher.jpg" },
  { name: "Lewis Hamilton", score: 96, image: "images/hamilton.jpg" },
  { name: "Sebastian Vettel", score: 93, image: "images/vettel.jpg" }
];

var engines = [
  { name: "Honda RA168E", score: 98, image: "images/honda.jpg" },
  { name: "Mercedes PU106", score: 96, image: "images/mercedes.jpg" },
  { name: "Ferrari Tipo 056", score: 93, image: "images/ferrari.jpg" },
  { name: "Renault RS27", score: 88, image: "images/renault.jpg" }
];

var chassis = [
  { name: "McLaren MP4/4", score: 99, image: "images/mp4.jpg" },
  { name: "Ferrari F2004", score: 97, image: "images/f2004.jpg" },
  { name: "Red Bull RB19", score: 96, image: "images/rb19.jpg" },
  { name: "Williams FW14B", score: 90, image: "images/fw14b.jpg" }
];

var driverIndex = 0, engineIndex = 0, chassisIndex = 0;

// DOM Elements
var splash = document.getElementById("splash");
var app = document.getElementById("app");
var startBtn = document.getElementById("startBtn");
var driverBtn = document.getElementById("driverBtn");
var engineBtn = document.getElementById("engineBtn");
var chassisBtn = document.getElementById("chassisBtn");
var buildBtn = document.getElementById("buildBtn");

var driverDisplay = document.getElementById("driverDisplay");
var engineDisplay = document.getElementById("engineDisplay");
var chassisDisplay = document.getElementById("chassisDisplay");
var resultDisplay = document.getElementById("resultDisplay");

// Audio elements
var engineSound = new Audio("sounds/engine-start.mp3");
var clickSound = new Audio("sounds/click.mp3");

// Splash to App transition
startBtn.onclick = function() {
  engineSound.play();
  splash.style.display = "none";
  app.classList.remove("hidden");
};

function updateDisplay(array, index, display) {
  display.innerHTML = `<strong>${array[index].name}</strong> (${array[index].score})<br><img src="${array[index].image}" alt="${array[index].name}">`;
}

function cycle(array, index, display) {
  clickSound.play();
  index++;
  if (index >= array.length) index = 0;
  updateDisplay(array, index, display);
  return index;
}

driverBtn.onclick = function() {
  driverIndex = cycle(drivers, driverIndex, driverDisplay);
};

engineBtn.onclick = function() {
  engineIndex = cycle(engines, engineIndex, engineDisplay);
};

chassisBtn.onclick = function() {
  chassisIndex = cycle(chassis, chassisIndex, chassisDisplay);
};

buildBtn.onclick = function() {
  var total = drivers[driverIndex].score + engines[engineIndex].score + chassis[chassisIndex].score;
  var result = "";
  if (total >= 270) result = "Unstoppable Force 💥";
  else if (total >= 250) result = "Championship Contender 🏆";
  else if (total >= 220) result = "Midfield Beast 💪";
  else result = "Needs a Tune-Up 🛠️";

  resultDisplay.innerHTML =
    `<h3>Total Score: ${total}</h3><p>${result}</p>`;
};

