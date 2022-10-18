// url must be string
function createSound(url) {
  return function () {
    return new Audio("/sounds/" + url);
  };
}

const buttonClick = createSound("btn-click.mp3");
const candyPositive1 = createSound("positive1.mp3");
const candyPositive2 = createSound("positive2.mp3");
const candyNegative = createSound("bad-candy.wav");
const gameOver = createSound("game-over.wav");
const mainTheme = createSound("game-theme.mp3");

export {
  buttonClick,
  candyNegative,
  candyPositive1,
  candyPositive2,
  gameOver,
  mainTheme,
};
