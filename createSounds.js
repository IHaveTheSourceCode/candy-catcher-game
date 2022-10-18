// url must be string
function createSound(url) {
  return function () {
    return new Audio("public/sounds/" + url);
  };
}

const buttonClick = createSound("../sounds/btn-click.mp3");
const candyPositive1 = createSound("../sounds/positive1.mp3");
const candyPositive2 = createSound("../sounds/positive2.mp3");
const candyNegative = createSound("../sounds/bad-candy.wav");
const gameOver = createSound("../sounds/game-over.wav");
const mainTheme = createSound("../sounds/game-theme.mp3");

export {
  buttonClick,
  candyNegative,
  candyPositive1,
  candyPositive2,
  gameOver,
  mainTheme,
};
