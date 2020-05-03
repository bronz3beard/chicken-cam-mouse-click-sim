const robot = require("robotjs");

exports.click = () => {
  robot.mouseClick('left');
  console.log('Mouse Clicked!');
};
