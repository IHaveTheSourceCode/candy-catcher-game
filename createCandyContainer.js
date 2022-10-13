import Matter from "matter-js";

function createStaticRectangle(x, y, width, rotatation) {
  let rectangle = Matter.Bodies.rectangle(x, y, width, 10, { isStatic: true });
  Matter.Body.rotate(rectangle, rotatation);
  return rectangle;
}

function returnCandyContainer() {
  let arrayOfRectangles = [];
  function push(rectangle) {
    arrayOfRectangles.push(rectangle);
  }

  push(createStaticRectangle(390, 935, 150, -0.2));
  push(createStaticRectangle(495, 770, 30, 0.8));
  push(createStaticRectangle(510, 790, 30, 1));
  push(createStaticRectangle(475, 750, 30, 0.8));
  push(createStaticRectangle(520, 820, 45, 1.3));
  push(createStaticRectangle(525, 860, 45, 1.7));
  push(createStaticRectangle(500, 897, 50, 2.4));

  push(createStaticRectangle(190, 935, 150, 0.2));
  push(createStaticRectangle(65, 770, 30, -0.8));
  push(createStaticRectangle(90, 745, 30, -0.8));
  push(createStaticRectangle(50, 790, 30, -1));
  push(createStaticRectangle(85, 750, 30, -0.8));
  push(createStaticRectangle(38, 820, 45, -1.3));
  push(createStaticRectangle(40, 865, 45, -1.9));
  push(createStaticRectangle(70, 900, 50, -2.4));
  push(createStaticRectangle(100, 915, 40, -2.7));
  push(createStaticRectangle(290, 950, 60, 0));
  push(createStaticRectangle(470, 915, 30, -0.4));

  return arrayOfRectangles;
}

export { returnCandyContainer, createStaticRectangle };
