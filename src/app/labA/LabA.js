import { Sprite, Texture, Container } from 'pixi.js';
import * as particles from 'pixi-particles';
import CrossImg from 'assets/images/cross.png';
import getTrailConfig from './getEmitterConfig';

export default class LabA {
  constructor(stageDisplay) {
    this.stageDisplay = stageDisplay;
    this.setupInteraction();
    this.setupParticleTrail();
    this.createTargetDisplay();
  }

  createTargetDisplay() {
    this.targetDisplay = Sprite.from(Texture.from(CrossImg));
    this.targetDisplay.interactive = false;
    this.targetDisplay.tint = 0x6b5370;
    this.stageDisplay.addChild(this.targetDisplay);
  }

  setupInteraction() {
    this.easing = 0.1;
    this.targetPoint = { x: 0, y: 0 };
    this.mousePoint = { x: 0, y: 0 };

    this.stageDisplay.interactive = true;
    this.stageDisplay.on('pointermove', (event) => {
      this.mousePoint = event.data.global;
    });
    window.addEventListener('mousedown', () => {
      this.particleEmitter.emit = true;
    });
    window.addEventListener('mouseup', () => {
      this.particleEmitter.emit = false;
    });
  }

  setupParticleTrail() {
    this.particleContainer = new Container();
    this.particleEmitter = new particles.Emitter(
      this.particleContainer,
      Texture.from(CrossImg),
      getTrailConfig
    );
    this.particleEmitter.updateSpawnPos(this.targetPoint.x, this.targetPoint.y);
    this.particleEmitter.autoUpdate = true;
    this.particleEmitter.emit = false;

    this.stageDisplay.addChild(this.particleContainer);
  }

  update() {
    // Calculating ease and updating target position
    const distance = {
      x: this.mousePoint.x - this.targetDisplay.width / 2 - this.targetPoint.x,
      y: this.mousePoint.y - this.targetDisplay.width / 2 - this.targetPoint.y,
    };
    this.targetPoint.x += distance.x * this.easing;
    this.targetPoint.y += distance.y * this.easing;
    this.targetDisplay.position = this.targetPoint;
    // Updating spawn position.
    this.particleEmitter.updateSpawnPos(
      this.targetPoint.x + this.targetDisplay.width / 2,
      this.targetPoint.y + this.targetDisplay.height / 2
    );
  }
}
