const card1 = document.querySelector(".red");
const card2 = document.querySelector(".yellow");
const card3 = document.querySelector(".green");
const secondСard = document.querySelector(".second-card");

function trafficLights() {
  setTimeout(() => {
    let s = 4;
    function up() {
      s--;
      secondСard.textContent = s;
      if (secondСard.textContent == "0") {
        clearInterval(stopUp);
      }
    }
    up();
    const stopUp = setInterval(up, 1000);

    secondСard.classList.add("red-active");
    secondСard.classList.remove("yellow-active");
    secondСard.classList.remove("green-active");

    card1.classList.add("active");
    card2.classList.remove("active");
    card3.classList.remove("active");
  }, 1000);

  setTimeout(() => {
    let s = 5;
    function up() {
      s--;
      secondСard.textContent = s;
      if (secondСard.textContent == "0") {
        clearInterval(stopUp);
      }
    }
    up();
    const stopUp = setInterval(up, 1000);

    secondСard.classList.add("yellow-active");
    secondСard.classList.remove("red-active");
    secondСard.classList.remove("green-active");

    card2.classList.add("active");
    card1.classList.remove("active");
    card3.classList.remove("active");
  }, 5000);

  setTimeout(() => {
    let s = 6;
    function up() {
      s--;
      secondСard.textContent = s;
      if (secondСard.textContent == "0") {
        clearInterval(stopUp);
      }
    }
    up();
    const stopUp = setInterval(up, 1000);

    secondСard.classList.add("green-active");
    secondСard.classList.remove("yellow-active");
    secondСard.classList.remove("red-active");

    card3.classList.add("active");
    card1.classList.remove("active");
    card2.classList.remove("active");
  }, 10000);
}
trafficLights();

setInterval(() => {
  trafficLights();
}, 15000);
