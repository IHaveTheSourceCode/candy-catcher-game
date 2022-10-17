import "./style.css";

import Matter, { World } from "matter-js";

// import container for candies
import {
  returnCandyContainer,
  returnReferencePoints,
} from "./createCandyContainer";

// import candy elements
import { currentTime } from "./createCandies";

import { spawnCandies, appendCandies } from "./spawnCandies";

// import sounds
import {
  buttonClick,
  candyNegative,
  candyPositive1,
  candyPositive2,
  gameOver,
  mainTheme,
} from "./createSounds";

// module aliases
let Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Vertices = Matter.Vertices,
  Mouse = Matter.Mouse,
  Events = Matter.Events,
  MouseConstraint = Matter.MouseConstraint;

// create an engine
let engine = Engine.create();

// creates candies
let candyAmount = 10;
function addMoreCandies() {
  if (candyAmount < 10) {
    candyAmount += 1;
  }
}
// setInterval(addMoreCandies, 10000);

let x = function () {
  appendCandies(engine, spawnCandies(candyAmount));
};
// setInterval(x, 1000);

// create a renderer
let render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 563,
    height: 965,
    wireframes: false,
    background: "transparent",
  },
});

// run the renderer
Render.run(render);

// create runner
let runner = Runner.create();

// run the engine
Runner.run(runner, engine);

// adds mouse control
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.6,
    render: {
      visible: false,
    },
  },
});

// add mouse to work on canvas
Composite.add(engine.world, mouseConstraint);

// set mouse sync with rendering
render.mouse = mouse;

// creates and adds pumpkin-shaped container for holding candies
Composite.add(engine.world, returnCandyContainer());

// creates and adds reference points for custom events
Composite.add(engine.world, returnReferencePoints());

// holds game stats
let lives = 3;

// boolean for checking for sound activation
let soundActive = false;

// for swapping sound effects
let soundSwap = 0;

Matter.Events.on(engine, "collisionStart", (e) => {
  if (e.pairs[0]) {
    if (
      e.pairs[0].bodyB.label == "goodCandy" &&
      e.pairs[0].bodyA.label == "refPoint"
    ) {
      // logic for when good candy enters container
      Matter.World.remove(engine.world, e.pairs[0].bodyB);
      if (soundActive) {
        if (soundSwap == 0) {
          candyPositive1().play();
          soundSwap = 1;
        } else {
          candyPositive2().play();
          soundSwap = 0;
        }
      }
    }
    if (
      e.pairs[0].bodyB.label == "badCandy" &&
      e.pairs[0].bodyA.label == "refPoint"
    ) {
      // logic for when bad candy enters container
      Matter.World.remove(engine.world, e.pairs[0].bodyB);
      if (soundActive) {
        candyNegative().play();
      }
    }
  }
});
x();

// sets main theme music
const mainThemeMusic = mainTheme();
mainThemeMusic.loop = "loop";
console.log(mainThemeMusic);
mainTheme.volume = 0.01;

// add event that will toggle all sounds on/off
document.querySelector(".toggle-sound").addEventListener("click", function () {
  let img = document.querySelector(".sound-image");
  if (soundActive) {
    img.src = "../volume-off-icon.png";
    soundActive = false;
    mainThemeMusic.pause();
  } else {
    img.src = "../volume-on-icon.png";
    soundActive = true;
    mainThemeMusic.play();
  }
});
