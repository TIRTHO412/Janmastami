//Preference
const colors = ["#F2C12E", "#D99518", "#A64F03"]; //Hue of the light bulbs
const sharpe = 325; //Change value to get diffrent shapes

//Setup
const svg = document.getElementById("stringlights");

function createBulb(x, y, i) {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  const randomIndex = Math.floor(Math.random() * colors.length);
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y + i * 40 * Math.sin(x / sharpe));
  circle.setAttribute("r", i);
  circle.style.fill = colors[randomIndex];
  return circle;
}

function createStringlights() {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 51; j++) {
      const x = j * 20 + 10;
      const y = i * 20;
      svg.appendChild(createBulb(x, y, i));
    }
  }
}

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

createStringlights();

//Let the string lights sway in the breeze
gsap.to("circle", {
  scale: () => getRandomValue(0.2, 1.5),
  y: () => getRandomValue(-5, 5),
  transformOrigin: "50% 50%",
  duration: 1,
  ease: "power2.inOut",
  stagger: {
    from: "random",
    yoyo: true,
    repeat: -1,
    repeatRefresh: true,
    amount: 3
  }
});



const handi = document.getElementById('handi');
const shrikrishna = document.getElementById('shrikrishna');
const shrikrishna2 = document.getElementById('shrikrishna2');
const stringlights = document.getElementById('stringlights');
const potPieces = document.querySelectorAll('.pot-piece');
const curdDrops = document.querySelectorAll('.curd-drop');
const janmashtamiText = document.getElementById('janmashtamiText');
const cursorArea = document.getElementById('cursor-area');

cursorArea.addEventListener('click', breakHandi);

function breakHandi() {
  handi.classList.add('handi-break');
  shrikrishna.classList.add('show-shri-krishna');
  shrikrishna2.classList.add('show-shri-krishna2');
  stringlights.classList.add('stringlights-off');
  potPieces.forEach((piece) => piece.classList.add('piecefall'));
  curdDrops.forEach((drop) => drop.classList.add('curdfall'));
  setTimeout(function () {
    cursorArea.style.display = 'none';
  }, 1000);

  janmashtamiText.classList.add('textAnimate');
}