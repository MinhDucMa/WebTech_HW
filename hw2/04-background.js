// Add your code here
const body = document.body;
const buttonChange = document.getElementById("startStopBtn");
const intervalInput = document.getElementById("intervalInput");

let intervalId;
let intervalSetTime = 3000;

buttonChange.addEventListener("click", handleButtonChange);
intervalInput.addEventListener("input", handleIntervalInput);

function backgroundColorChange() {
  const randomHsla = generateHslaColor();
  document.body.style.backgroundColor = randomHsla;
}

function generateHslaColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 50;
  const lightness = 50;
  const alpha = 0.6;

  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
}

function startColorChange() {
  buttonChange.textContent = "Stop";
  intervalInput.disabled = true;
  intervalId = setInterval(backgroundColorChange, intervalSetTime);
}

function stopColorChange() {
  buttonChange.textContent = "Start";
  intervalInput.disabled = false;
  clearInterval(intervalId);
}

function handleButtonChange() {
  if (buttonChange.textContent === "Start") {
    startColorChange();
  } else stopColorChange();
}

function handleIntervalInput() {
  if (intervalInput.value === "") {
    intervalSetTime = 3000;
  } else intervalSetTime = parseInt(intervalInput.value * 1000);

  clearInterval(intervalId);
  startColorChange();
}

startColorChange();