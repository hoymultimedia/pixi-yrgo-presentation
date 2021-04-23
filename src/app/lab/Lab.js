import { Sprite, Texture, Graphics } from 'pixi.js';
import CircleImg from 'assets/images/circle.png';

export default class Lab {
  constructor(stageDisplay) {
    this.stageDisplay = stageDisplay;
    // this.createGraphics();
    // this.createSprite();
    // this.setupInteraction();
  }

  createGraphics() {
    this.graphic = new Graphics();
    this.graphic.beginFill(0x6b5370);
    this.graphic.drawRect(200, 200, 200, 200);
    this.graphic.endFill();
    this.stageDisplay.addChild(this.graphic);
  }

  createSprite() {
    this.sprite = Sprite.from(Texture.from(CircleImg));
    this.sprite.tint = 0x6b5370;
    this.sprite.x = 500;
    this.sprite.y = 500;
    this.stageDisplay.addChild(this.sprite);
  }

  setupInteraction() {
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    this.sprite.on('mouseup', () => {
      this.sprite.tint = 0xefdba5;
    });
    this.sprite.on('mouseout', () => {
      this.sprite.tint = 0x6b5370;
    });
  }

  update() {}
}
