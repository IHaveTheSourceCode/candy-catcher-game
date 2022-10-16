import Matter from "matter-js";

let currentTime = 0.15;

// function that creates candies with custom shapes
// path and img src must be strings
function createCandy(path, img, xScale, yScale, timeScale) {
  let candy = Matter.Vertices.fromPath(path);
  let candyBody = Matter.Bodies.fromVertices(
    Math.floor(Math.random() * 330) + 120,
    -50,
    candy,
    {
      timeScale: timeScale,
      render: {
        sprite: {
          texture: img,
          xScale: xScale,
          yScale: yScale,
        },
      },
    }
  );

  // sets starting position of candy to random
  Matter.Body.rotate(candyBody, Math.random() * 6);
  return candyBody;
}

function createRoundCandy(radius, img, xScale, yScale, timeScale) {
  let candy = Matter.Bodies.circle(
    Math.floor(Math.random() * 330) + 120,
    -50,
    radius,
    {
      timeScale: timeScale,
      render: {
        sprite: {
          texture: img,
          xScale: xScale,
          yScale: yScale,
        },
      },
    }
  );

  Matter.Body.rotate(candy, Math.random() * 6);
  return candy;
}

let cornCandy = function () {
  return createCandy(
    "M 0 0 L -0.4 0 L -0.8 0 L -1.2 0.4 L -1.6 0.4 L -2 0.8 L -2.4 1.2 L -4.4 3.6 L -6.4 6.8 L -8.4 11.2 L -10.4 16.8 L -12.8 24.4 L -14.4 31.2 L -15.6 37.2 L -16.4 43.2 L -16.4 44.8 L -16.4 46.4 L -16 48 L -15.2 49.6 L -13.6 50.8 L -11.6 51.6 L -8 52.8 L -4.4 53.6 L 0 54 L 4.4 53.6 L 8 52.8 L 11.6 51.6 L 14.8 50 L 15.6 48.8 L 16.4 46.4 L 16.4 44 L 16 39.2 L 14.8 33.2 L 13.6 28 L 12 22 L 10.4 16.8 L 8.4 11.2 L 6.8 8 L 5.6 5.6 L 3.6 2.4 L 1.6 0.4 L -0.4 0 Z",
    "../candy-corn.png",
    0.15,
    0.15,
    currentTime
  );
};
let sweetCandy = function () {
  return createRoundCandy(25, "../candy-sweet.png", 0.1, 0.1, currentTime);
};
let pokemonCandy = function () {
  return createRoundCandy(20, "../candy-pokemon.png", 0.2, 0.2, currentTime);
};
let pappermintBlue = function () {
  return createRoundCandy(
    25,
    "../pappermint-blue.png",
    0.08,
    0.08,
    currentTime
  );
};
let pappermintGreen = function () {
  return createRoundCandy(
    25,
    "../pappermint-green.png",
    0.08,
    0.08,
    currentTime
  );
};
let pappermintPink = function () {
  return createRoundCandy(
    25,
    "../pappermint-pink.png",
    0.08,
    0.08,
    currentTime
  );
};
let pappermintRed = function () {
  return createRoundCandy(23, "../pappermint-red.png", 0.06, 0.06, currentTime);
};
let goldenApple = function () {
  return createCandy(
    "M 0 0 L 0 3.84 L 7.68 3.84 L 7.68 7.68 L 11.52 7.68 L 11.52 26.88 L 7.68 26.88 L 7.68 34.56 L 3.84 34.56 L 3.84 38.4 L 0 38.4 L 0 42.24 L -23.04 42.24 L -23.04 38.4 L -26.88 38.4 L -26.88 34.56 L -30.72 34.56 L -30.72 26.88 L -34.56 26.88 L -34.56 7.68 L -30.72 7.68 L -30.72 3.84 L -23.04 3.84 L -23.04 0 L 0 0",
    "../golden-apple.png",
    0.4,
    0.4,
    currentTime
  );
};
let kawaiiCorn = function () {
  return createCandy(
    "M 0 0 L -2.016 1.152 L -3.744 2.304 L -4.896 4.608 L -5.184 6.912 L -5.184 7.776 L -7.2 8.64 L -9.216 10.08 L -10.08 10.944 L -10.944 12.672 L -10.944 14.112 L -10.944 15.84 L -10.656 16.992 L -11.808 18.432 L -12.672 19.296 L -13.824 21.024 L -14.688 23.328 L -14.976 25.344 L -14.976 27.072 L -14.976 29.088 L -14.4 30.816 L -13.824 32.256 L -12.96 33.696 L -11.808 35.424 L -10.656 36.576 L -9.216 37.44 L -8.064 38.016 L -7.2 40.896 L -5.76 43.776 L -4.032 46.368 L -2.88 48.096 L -1.728 49.824 L 0 51.552 L 1.44 52.992 L 2.88 54.432 L 4.32 55.296 L 6.048 55.584 L 7.488 55.584 L 8.64 55.008 L 10.368 53.568 L 12.96 50.976 L 14.688 48.384 L 16.416 45.792 L 17.28 43.776 L 18.432 41.184 L 18.72 39.744 L 19.008 38.592 L 19.296 36.864 L 21.024 36.576 L 22.752 35.136 L 23.904 33.696 L 24.768 31.68 L 25.056 29.664 L 25.344 27.36 L 25.056 25.056 L 24.768 22.752 L 23.616 21.024 L 22.752 19.872 L 22.752 18.432 L 22.464 17.568 L 21.888 16.704 L 20.736 15.84 L 21.024 13.824 L 20.448 12.096 L 20.16 10.944 L 19.584 9.792 L 18.72 8.64 L 17.568 7.488 L 16.128 6.912 L 14.976 6.336 L 13.536 6.336 L 12.096 6.336 L 11.808 6.336 L 11.808 5.184 L 11.232 3.456 L 10.368 2.304 L 8.928 0.864 L 8.064 0.288 L 6.048 0 L 4.608 -0.288 L 2.304 -0.288 L -0.288 0 Z",
    "../kawaii-corn-candy.png",
    0.1,
    0.1,
    currentTime
  );
};
let candyGhost = function () {
  return createCandy(
    "M 0 0 L -4.032 0.576 L -9.792 2.88 L -14.976 5.76 L -19.584 10.368 L -22.464 14.4 L -24.768 19.008 L -26.496 23.04 L -27.072 26.496 L -27.648 30.528 L -27.648 34.56 L -27.648 38.592 L -27.072 46.08 L -27.072 50.688 L -25.92 54.144 L -23.04 58.752 L -20.16 61.056 L -17.28 62.208 L -14.976 62.208 L -13.248 60.48 L -11.52 56.448 L -8.64 52.416 L -6.336 51.264 L -4.608 52.992 L -2.88 55.296 L 0 59.328 L 2.304 62.208 L 4.032 62.784 L 6.336 61.632 L 8.64 58.176 L 10.944 54.72 L 13.248 52.416 L 14.4 51.84 L 16.128 52.416 L 17.856 54.72 L 19.584 58.176 L 21.312 60.48 L 23.04 62.208 L 25.344 62.208 L 28.224 60.48 L 32.832 56.448 L 33.984 52.992 L 35.136 47.232 L 35.136 36.288 L 35.136 29.376 L 34.56 23.616 L 31.68 16.128 L 28.8 12.096 L 26.496 9.216 L 21.888 5.184 L 17.28 2.304 L 12.096 1.152 L 7.488 0 L 4.032 0 L -0.576 0 Z",
    "../candy-ghost.png",
    0.1,
    0.1,
    currentTime
  );
};
let marioShroom = function () {
  return createCandy(
    "M 0 0 L 18.144 0 L 18.144 2.016 L 24.192 2.016 L 24.192 6.048 L 26.208 6.048 L 26.208 8.064 L 28.224 8.064 L 28.224 14.112 L 30.24 14.112 L 30.24 30.24 L 28.224 30.24 L 28.224 32.256 L 26.208 32.256 L 26.208 38.304 L 24.192 38.304 L 24.192 40.32 L 20.16 40.32 L 20.16 42.336 L -4.032 42.336 L -4.032 40.32 L -6.048 40.32 L -6.048 38.304 L -8.064 38.304 L -8.064 32.256 L -10.08 32.256 L -10.08 30.24 L -14.112 30.24 L -14.112 14.112 L -12.096 14.112 L -10.08 14.112 L -10.08 8.064 L -8.064 8.064 L -8.064 6.048 L -6.048 6.048 L -6.048 2.016 L 0 2.016 L 0 0",
    "../mario-shroom.png",
    0.1,
    0.1,
    currentTime
  );
};
let wideCandy = function () {
  return createCandy(
    "M 0 0 L 30 0 L 33 1 L 35 3 L 36 5 L 36 7 L 46 -1 L 47 0 L 46 2 L 47 4 L 48 6 L 49 9 L 48 11 L 47 14 L 47 15 L 48 17 L 46 18 L 47 20 L 48 22 L 47 23 L 46 25 L 44 24 L 41 21 L 39 19 L 36 16 L 36 18 L 35 20 L 34 21 L 32 22 L 30 23 L 27 23 L -29 23 L -31 23 L -33 22 L -34 20 L -35 19 L -36 17 L -36 15 L -38 18 L -40 20 L -43 23 L -46 25 L -47 25 L -48 23 L -48 20 L -48 17 L -48 16 L -47 14 L -46 12 L -47 10 L -48 9 L -48 7 L -48 5 L -49 3 L -50 1 L -50 0 L -49 -1 L -47 0 L -43 3 L -40 5 L -37 7 L -36 7 L -35 4 L -34 3 L -33 2 L -32 1 L -30 0 L 0 0",
    "../wide-candy-pink.png",
    0.6,
    0.6,
    currentTime
  );
};

function manipulateTime() {
  if (currentTime > 0.7 && currentTime < 5) {
    currentTime *= 1.01;
  } else if (currentTime < 5) {
    currentTime *= 1.02;
  }
}

function sayHi() {
  console.log("hi");
}

setInterval(manipulateTime, 1000);

export {
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
  createRoundCandy,
  createCandy,
};
