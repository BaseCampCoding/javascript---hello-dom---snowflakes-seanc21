const MIN_SIZE = 10;
const MAX_SIZE = 20;
const MIN_DURATION = 2000;
const MAX_DURATION = 5000;

const snowflakesContainer = document.getElementById("snowflakes-container");
const snowVsRain = document.querySelector("#snow-vs-rain");

const clickColor = document.querySelector("#click-color");

const wind = document.querySelector("#wind");

// quantity
let quantityAmount = 250;
let quantity = document.getElementById("quantity");
let time = setInterval(() => createSnowflake(), quantityAmount);
quantity.addEventListener("change", () => {
  switch (quantity.value) {
    case "0":
      quantityAmount = 500;
    case "1":
      quantityAmount = 250;
    case "2":
      quantityAmount = 100;
    case "3":
      quantityAmount = 50;
    case "4":
      quantityAmount = 0;
  }
  clearInterval(time)
  time = setInterval(() => createSnowflake(), quantityAmount);
});

function randint(lo, hi) {
  return Math.random() * (hi - lo) + lo;
}

function randomIcon() {
  if (Math.random() > Number(snowVsRain.value)) {
    return "fa-snowflake";
  } else {
    return "fa-tint";
  }
}

function createSnowflake() {
  const snowFlake = document.createElement("i");

  snowFlake.classList.add("fas", randomIcon());
  snowFlake.style.left = randint(0, 100) + "%";
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = randint(MIN_SIZE, MAX_SIZE) + "px";

  snowflakesContainer.appendChild(snowFlake);

  snowFlake
    .animate(
      { transform: `translate(0vw, 100vh)` },
      { duration: randint(MIN_DURATION, MAX_DURATION) }
    )
    .finished.then(() => snowFlake.remove());
}
