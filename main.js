import "./style.css";
import Matter from "matter-js";
import { returnCandyContainer } from "./createCandyContainer";

// module aliases
let Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Vertices = Matter.Vertices;

// create an engine
let engine = Engine.create();

// create a renderer
let render = Render.create({
  element: document.querySelector("#app-container"),
  engine: engine,
  options: {
    width: 563,
    height: 955,
    wireframes: false,
    background: "#182747",
  },
});

// create two boxes and a ground
let boxA = Bodies.polygon(150, 200, 5, 30);
let boxB = Bodies.rectangle(450, 50, 80, 80);
var star = Vertices.fromPath(
    "M 0 0 L -0.4 0 L -0.8 0 L -1.2 0.4 L -1.6 0.4 L -2 0.8 L -2.4 1.2 L -4.4 3.6 L -6.4 6.8 L -8.4 11.2 L -10.4 16.8 L -12.8 24.4 L -14.4 31.2 L -15.6 37.2 L -16.4 43.2 L -16.4 44.8 L -16.4 46.4 L -16 48 L -15.2 49.6 L -13.6 50.8 L -11.6 51.6 L -8 52.8 L -4.4 53.6 L 0 54 L 4.4 53.6 L 8 52.8 L 11.6 51.6 L 14.8 50 L 15.6 48.8 L 16.4 46.4 L 16.4 44 L 16 39.2 L 14.8 33.2 L 13.6 28 L 12 22 L 10.4 16.8 L 8.4 11.2 L 6.8 8 L 5.6 5.6 L 3.6 2.4 L 1.6 0.4 L -0.4 0 Z"
  ),
  concave = Bodies.fromVertices(300, 100, star);
// let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
// Matter.Body.rotate(ground, 0);

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, concave]);

//creates and adds pumpkin-shaped container for holding candies
Composite.add(engine.world, returnCandyContainer());

// run the renderer
Render.run(render);

// create runner
let runner = Runner.create();

// run the engine
Runner.run(runner, engine);
