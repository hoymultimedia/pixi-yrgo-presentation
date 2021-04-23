// https://gist.github.com/winduptoy/a1aa09c3499e09edbd33
// https://evanw.github.io/lightgl.js/docs/vector.html

export default class Vector2 {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    console.log();
  }

  set(vector) {
    this.x = vector.x;
    this.y = vector.y;

    return this;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;

    return this;
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  div(value) {
    this.x /= value;
    this.y /= value;
    return this;
  }

  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }

  normalize() {
    return this.div(this.mag());
  }

  multiply(value) {
    this.x *= value;
    this.y *= value;
    return this;
  }

  setMag(value) {
    return this.normalize().multiply(value);
  }

  scale(f) {
    this.x *= f;
    this.y *= f;
    return this;
  }

  limit(s) {
    const len = this.length();
    if (len > s && len > 0) {
      this.scale(s / len);
    }
    return this;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  mult(n) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  toAngles() {
    const h = Math.atan2(this.y, this.x);
    return h;
  }

  static subtract(a, b) {
    return new Vector2(a.x - b.x, a.y - b.y);
  }

  static fromAngles(theta, phi) {
    return new Vector2(Math.cos(theta) * Math.cos(phi), Math.sin(phi));
  }

  static randomDirection() {
    return Vector2.fromAngles(
      Math.random() * Math.PI * 2,
      Math.asin(Math.random() * 2 - 1)
    );
  }
}
