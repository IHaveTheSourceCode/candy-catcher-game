import Matter, { World } from "matter-js";
import { currentTime } from "./createCandies";
import {
  returnCandyContainer,
  returnReferencePoints,
} from "./createCandyContainer";

import { spawnCandies, appendCandies } from "./spawnCandies";

function startGame(
  spawnCycle,
  timeCycle,
  quanityCycle,
  candyAmountVar,
  targetEngine,
  quanityUpdateCycle
) {
  // start spawning candies
  function startSpawningCandies() {
    appendCandies(targetEngine, spawnCandies(candyAmountVar[0]));
  }
  startSpawningCandies();
  spawnCycle[0] = setInterval(startSpawningCandies, 2000);

  // start multiplying time
  function manipulateTime() {
    if (currentTime[0] > 0.7 && currentTime[0] < 5) {
      currentTime[0] *= 1.01;
    } else if (currentTime[0] < 5) {
      currentTime[0] *= 1.02;
    }
    updateTimeBoard(currentTime[0]);
  }
  timeCycle[0] = setInterval(manipulateTime, 1000);

  // start adding candies quanity
  function addMoreCandies() {
    if (candyAmountVar[0] < 10) {
      candyAmountVar[0] += 1;
    }
  }
  quanityCycle[0] = setInterval(addMoreCandies, 10000);
  quanityUpdateCycle[0] = setInterval(function () {
    updateCandiesAmountBoard(candyAmountVar[0]);
  }, 1000);
}

function endGame(
  spawnCycle,
  timeCycle,
  quanityCycle,
  score,
  quanityUpdateCycle
) {
  // clears intervals
  clearInterval(spawnCycle[0]);
  clearInterval(timeCycle[0]);
  clearInterval(quanityCycle[0]);
  clearInterval(quanityUpdateCycle[0]);

  // show score and restart game button
  let gameOverPopUp = document.querySelector(".end-game-stats");
  gameOverPopUp.classList.toggle("hide");
  let scoreElement = document.querySelector(".score-number");
  scoreElement.textContent = score[0];
}

function restartGame(
  spawnCycle,
  timeCycle,
  quanityCycle,
  candyAmountVar,
  targetEngine,
  quanityUpdateCycle,
  lifesVar,
  scoreVar
) {
  restoreLifes(lifesVar);

  // reset score
  scoreVar[0] = 0;
  updateScoreBoard(0, scoreVar);

  // reset candies quanity
  candyAmountVar[0] = 1;

  // time resets already in main.js

  // hides endgame UI
  let endgameUI = document.querySelector(".end-game-stats");
  endgameUI.classList.toggle("hide");

  // start game
  startGame(
    spawnCycle,
    timeCycle,
    quanityCycle,
    candyAmountVar,
    targetEngine,
    quanityUpdateCycle
  );
}

function createLife() {
  let life = document.createElement("img");
  life.src = "./hearth.png";
  life.alt = "";
  life.classList.add("life");
  return life;
}

function removeLife(lifesVar) {
  let lifes = document.querySelectorAll(".life");
  lifes[0].remove();
  lifesVar[0] -= 1;
}

function restoreLifes(lifesVar) {
  lifesVar[0] = 3;
  let lifesContainer = document.querySelector(".lifes");
  for (let i = 0; i < 3; i++) {
    lifesContainer.appendChild(createLife());
  }
}

function updateScoreBoard(score, scoreVar) {
  let scoreBoard = document.querySelector(".score");
  scoreVar[0] += score;
  scoreBoard.textContent = "Score: " + scoreVar;
}

function updateTimeBoard(speed) {
  let timeBoard = document.querySelector(".game-speed");
  speed = speed.toString();
  // show only first 4 numbers
  speed = speed.substr(0, 4);
  timeBoard.textContent = "Game Speed: " + speed;
}

function updateCandiesAmountBoard(candiesAmount) {
  let candiesAmountBoard = document.querySelector(".candies-count");
  candiesAmountBoard.textContent = "Candies Quanity: " + candiesAmount;
}

// clears canvas fromm all elements
// function clearCanvas(engine) {
//   World.clear(engine.world);
//   Matter.Composite.add(engine.world, returnCandyContainer());
//   Matter.Composite.add(engine.world, returnReferencePoints());
//   let render = Matter.Render.create({
//     element: document.body,
//     engine: engine,
//     options: {
//       width: 563,
//       height: 965,
//       wireframes: false,
//       background: "transparent",
//     },
//   });
//   let mouse = Matter.Mouse.create(render.canvas);
//   let mouseConstraint = Matter.MouseConstraint.create(engine, {
//     mouse: mouse,
//     constraint: {
//       stiffness: 0.6,
//       render: {
//         visible: false,
//       },
//     },
//   });
//   Matter.Composite.add(engine.world, mouseConstraint);
// }

export {
  updateScoreBoard,
  updateTimeBoard,
  updateCandiesAmountBoard,
  startGame,
  endGame,
  removeLife,
  restartGame,
};
