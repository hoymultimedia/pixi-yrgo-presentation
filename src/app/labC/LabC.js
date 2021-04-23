import { Sprite, Texture, Graphics, Container } from 'pixi.js';
import { ShockwaveFilter } from '@pixi/filter-shockwave';
import FlamingoImg from 'assets/images/pexels-marko-blazevic-1327405.jpg';
import appStore from 'app/appStore';

// import appStore from 'app/appStore';

export default class LabC {
  constructor(stageDisplay) {
    this.stageDisplay = stageDisplay;
    this.display = new Container();
    this.stageDisplay.addChild(this.display);

    this.createBackground();
    this.createImage();
    this.setupShockwaveFilter();
    this.setupInteraction();
  }

  createBackground() {
    const bg = new Graphics();
    bg.beginFill(0x1b2725);
    bg.drawRect(0, 0, appStore.width, appStore.height);
    bg.endFill();
    bg.cacheAsBitmap = true;
    this.display.addChild(bg);
  }

  createImage() {
    this.imgDisplay = Sprite.from(Texture.from(FlamingoImg));
    this.stageDisplay.addChild(this.imgDisplay);

    const orgImgSize = { width: 1254, height: 2000 };
    const scale = appStore.height / orgImgSize.height;
    this.imgDisplay.scale.set(scale, scale);
    this.imgDisplay.x = (appStore.width - orgImgSize.width * scale) / 2;
  }

  setupInteraction() {
    this.isPointerDown = true;
    this.mousePoint = { x: 0, y: 0 };

    this.imgDisplay.interactive = true;
    this.imgDisplay.on('mousemove', () => {
      if (this.isPointerDown) {
        this.shockwaveFilter.center = {
          x: this.mousePoint.x - this.imgDisplay.x,
          y: this.mousePoint.y,
        };
      }
    });
    this.imgDisplay.on('pointerdown', (event) => {
      this.isPointerDown = true;
      this.mousePoint = event.data.global;
      this.shockwaveFilter.center = {
        x: this.mousePoint.x - this.imgDisplay.x,
        y: this.mousePoint.y,
      };
      this.shockwaveFilter.time = 0.05;
    });
    this.imgDisplay.on('pointerup', (event) => {
      this.isPointerDown = false;
      this.mousePoint = event.data.global;
      this.shockwaveFilter.time = 0.05;
      this.shockwaveFilter.center = {
        x: this.mousePoint.x - this.imgDisplay.x,
        y: this.mousePoint.y,
      };
    });
  }

  setupShockwaveFilter() {
    const options = {
      amplitude: 20.0,
      wavelength: 200.0,
      brightness: 1.0,
      speed: 500.0,
      radius: -2.0,
    };
    this.shockwaveFilter = new ShockwaveFilter([1, 1], options);
    this.shockwaveFilter.center = { x: 0, y: 0 };
    this.imgDisplay.filters = [this.shockwaveFilter];
  }

  update() {
    if (!this.isPointerDown) {
      this.shockwaveFilter.time += 0.01;
    }
  }
}
