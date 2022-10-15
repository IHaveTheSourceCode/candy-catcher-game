import "./style.css";
import Matter from "matter-js";
import { returnCandyContainer } from "./createCandyContainer";
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
  Constraint = Matter.MouseConstraint,
  MouseConstraint = Matter.MouseConstraint;

// create an engine
let engine = Engine.create();

// create a renderer
let render = Render.create({
  element: document.querySelector("#app-container"),
  engine: engine,
  options: {
    width: 563,
    height: 965,
    wireframes: false,
    background: "#182747",
  },
});

// creates candies
// let x = function () {
//   appendCandies(engine, spawnCandies(1));
// };
// setInterval(x, 1000);

// add all of the bodies to the world
Composite.add(engine.world, [cornCandy, sweetCandy]);

//creates and adds pumpkin-shaped container for holding candies
Composite.add(engine.world, returnCandyContainer());

// run the renderer
Render.run(render);

// create runner
let runner = Runner.create();

// run the engine
Runner.run(runner, engine);
