import Matter, { Composite } from "matter-js";
import {
  cornCandy,
  sweetCandy,
  pokemonCandy,
  pappermintBlue,
  pappermintGreen,
  pappermintPink,
  pappermintRed,
  goldenApple,
  kawaiiCorn,
  candyGhost,
  marioShroom,
  wideCandy,
} from "./createCandies";

// appends candies to selected container
function appendCandies(targetEngine, arrayOfCandies) {
  Matter.Composite.add(targetEngine.world, arrayOfCandies);
}

// will spawn candies at random
function spawnCandies(candies_amount) {
  let candiesArr = [];

  for (let i = 0; i < candies_amount; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber >= 0 && randomNumber < 5) {
      candiesArr.push(cornCandy());
    }
    if (randomNumber > 5 && randomNumber <= 30) {
      candiesArr.push(sweetCandy());
    }
    if (randomNumber > 30 && randomNumber <= 31) {
      candiesArr.push(pokemonCandy());
    }
    if (randomNumber > 31 && randomNumber <= 32) {
      candiesArr.push(goldenApple());
    }
    if (randomNumber > 32 && randomNumber <= 33) {
      candiesArr.push(kawaiiCorn());
    }
    if (randomNumber > 33 && randomNumber <= 34) {
      candiesArr.push(candyGhost());
    }
    if (randomNumber > 34 && randomNumber <= 35) {
      candiesArr.push(marioShroom());
    }
    if (randomNumber > 35 && randomNumber <= 45) {
      candiesArr.push(pappermintBlue());
    }
    if (randomNumber > 45 && randomNumber <= 55) {
      candiesArr.push(pappermintGreen());
    }
    if (randomNumber > 55 && randomNumber <= 65) {
      candiesArr.push(pappermintRed());
    }
    if (randomNumber > 65 && randomNumber <= 75) {
      candiesArr.push(pappermintPink());
    }
    if (randomNumber > 75 && randomNumber <= 100) {
      candiesArr.push(wideCandy());
    }
  }

  return candiesArr;
}

export { spawnCandies, appendCandies };
