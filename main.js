import "./style.css";
import Matter, { World } from "matter-js";
import {
  returnCandyContainer,
  returnReferencePoints,
} from "./createCandyContainer";
import {
  cornCandy,
  sweetCandy,
  createRoundCandy,
  createCandy,
} from "./createCandies";
import { spawnCandies, appendCandies } from "./spawnCandies";

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
let candyAmount = 5;
function addMoreCandies() {
  if (candyAmount < 10) {
    candyAmount += 1;
  }
}
// setInterval(addMoreCandies, 10000);

let x = function () {
  appendCandies(engine, spawnCandies(candyAmount));
};
// setInterval(x, 2000);

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

Matter.Events.on(engine, "collisionStart", (e) => {
  // console.log(e.pairs[0].bodyA.label);
  if (e.pairs[0]) {
    console.log(e.pairs[0].bodyB.label);
  }
});
x();
