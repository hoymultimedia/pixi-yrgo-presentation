import { Sprite, Texture, SimpleRope } from 'pixi.js';
import CircleImg from 'assets/images/circle.png';
import SnakeImg from 'assets/images/snake.png';
import appStore from 'app/appStore';

export default class LabB {
  constructor(stageDisplay) {
    this.stageDisplay = stageDisplay;
    this.counter = 0;
    this.createPoints();
    this.setupDisplayPoints();
    // this.setupRopeTexture();
  }

  createPoints() {
    this.points = [];

    const numberOfPoints = 1;
    const vGap = 100;
    const xOffset = (appStore.width - vGap * numberOfPoints) / 2;
    this.yCenterPos = appStore.height / 2;

    for (let index = 0; index < numberOfPoints; index++) {
      const point = { x: xOffset + index * vGap, y: this.yCenterPos };
      this.points.push(point);
    }
  }

  setupDisplayPoints() {
    this.displayPoints = [];
    for (let index = 0; index < this.points.length; index++) {
      const point = this.points[index];
      const pointDisplay = Sprite.from(Texture.from(CircleImg));
      pointDisplay.tint = 0x6b5370;
      pointDisplay.position = point;
      this.stageDisplay.addChild(pointDisplay);
      this.displayPoints.push(pointDisplay);
    }
  }

  setupRopeTexture() {
    this.rope = new SimpleRope(Texture.from(SnakeImg), this.points);
    this.stageDisplay.addChild(this.rope);
  }

  updatePoints() {
    if (!this.points) {
      return;
    }
    const height = 100;
    const movementOffset = 0.5;
    for (let index = 0; index < this.points.length; index++) {
      const yOffset = height * Math.sin(this.counter + index * movementOffset);
      this.points[index].y = yOffset + this.yCenterPos;
      if (this.displayPoints) {
        const pointDisplay = this.displayPoints[index];
        pointDisplay.y = this.points[index].y;
      }
    }
  }

  update() {
    this.counter += 0.1;

    // this.updatePoints();
  }
}
