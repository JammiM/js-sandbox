const secondsHands = document.querySelector(".second-hand");
const hourHands = document.querySelector(".hour-hand");
const minuteHands = document.querySelector(".min-hand");

function setDate() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  const secondsAsDegrees = (seconds / 60) * 360 + 90;
  const hoursAsDegrees = (hour / 12) * 360 + 90;
  const minutesAsDegrees = (minute / 60) * 360 + 90;

  secondsAsDegrees == 0
    ? (secondsHands.style.transition = "none")
    : (secondsHands.style.transform = `rotate(${secondsAsDegrees}deg)`);

  minutesAsDegrees == 0
    ? (minuteHands.style.transition = "none")
    : (minuteHands.style.transform = `rotate(${minutesAsDegrees}deg)`);

  hoursAsDegrees == 0
    ? (hourHands.style.transition = "none")
    : (hourHands.style.transform = `rotate(${hoursAsDegrees}deg)`);
}

setInterval(setDate, 1000);
