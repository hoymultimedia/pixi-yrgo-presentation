const getEmitterConfig = {
  alpha: {
    start: 1,
    end: 0,
  },
  scale: {
    start: 0.15,
    end: 0.01,
    minimumScaleMultiplier: 1,
  },
  color: {
    start: '#866b8c',
    end: '#c3a3c9',
  },
  speed: {
    start: 200,
    end: 50,
    minimumSpeedMultiplier: 1,
  },
  acceleration: {
    x: 0,
    y: 0,
  },
  maxSpeed: 0,
  startRotation: {
    min: 0,
    max: 360,
  },
  noRotation: false,
  rotationSpeed: {
    min: 0,
    max: 0,
  },
  lifetime: {
    min: 0.5,
    max: 1.3,
  },
  blendMode: 'normal',
  frequency: 0.001,
  emitterLifetime: -1,
  maxParticles: 1500,
  pos: {
    x: 0,
    y: 0,
  },
  addAtBack: false,
  spawnType: 'circle',
  spawnCircle: {
    x: 0,
    y: 0,
    r: 0,
  },
};

export default getEmitterConfig;
