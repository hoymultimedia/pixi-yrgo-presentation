import Signal from 'mini-signals';

import cross from 'assets/images/cross.png';

export default class Resources {
  constructor(application) {
    this.onLoaded = new Signal();

    const app = application;
    app.loader.add(cross);
    app.loader.load(() => {
      this.onLoaded.dispatch();
    });
  }
}
