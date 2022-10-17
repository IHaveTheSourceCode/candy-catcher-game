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
  spawnCycle[0] = setInterval(startSpawningCandies, 2000);

  // start multiplying time
  function manipulateTime() {
    if (currentTime[0] > 0.7 && currentTime[0] < 5) {
      currentTime[0] *= 1.01;
    } else if (currentTime[0] < 5) {
      currentTime[0] *= 1.02;
    }
  }
  timeCycle[0] = setInterval(manipulateTime, 1000);

  // start adding candies quanity
  function addMoreCandies() {
    if (candyAmountVar[0] < 10) {
      candyAmountVar[0] += 1;
    }
  }
  quanityCycle[0] = setInterval(addMoreCandies, 10000);
  quanityUpdateCycle = setInterval(function () {
    updateCandiesAmountBoard(1);
  }, 1000);
}

function endGame(spawnCycle, timeCycle, quanityCycle, score) {
  // clears intervals
  clearInterval(spawnCycle[0]);
  clearInterval(timeCycle[0]);
  clearInterval(quanityCycle[0]);

  // show score and restart game button
  let gameOverPopUp = document.querySelector(".end-game-stats");
  gameOverPopUp.classList.toggle("hide");
  let scoreElement = document.querySelector(".score-number");
  scoreElement.textContent = score[0];
}

function restartGame(lifesVar, scoreVar, candiesAmountVar, timeMultipler) {
  let restartButton = document.querySelector(".play-again-button");
  // hide endgame popup on button click
  restartButton.addEventListener("click", function () {
    document.querySelector(".end-game-stats").classList.toggle("hide");
  });

  restoreLifes(lifesVar);

  // reset score
  updateScoreBoard(0, scoreVar);

  // reset candies quanity
  candiesAmountVar[0] = 0;

  // time resets already in main.js

  // start game
}

function createLife() {
  let life = document.createElement("img");
  life.src = "../hearth.png";
  life.alt = "";
  life.class = "life";
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
  scoreBoard.textContent = "Score: " + scoreVar[0];
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
};
