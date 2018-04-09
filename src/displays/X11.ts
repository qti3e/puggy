import { IS_WEB, createResolvable } from "./util";

export function X11Display(X11, createClient = true) {
  if (IS_WEB) {
    throw new Error("X11 is not supported in browser.");
  }
  return class {
    data: Uint32Array;
    Render;
    root;
    X;
    win;

    constructor(public width, public height) {
      this.data = new Uint32Array(width * height * 4);
    }

    async init() {
      const r1 = createResolvable<any>();
      X11.createClient((err, display) => r1.resolve(display));
      const display = await r1;
      this.X = display.client;
      const r2 = createResolvable();
      this.X.require('render', (err, Render) => r2.resolve(Render));
      this.Render = await r2;
      this.root = display;
      await this.createWindow();
    }

    async createWindow() {
      this.win = this.X.AllocID();
      this.X.CreateWindow(
        this.win, this.root,
        0, 0, this.width, this.height,
        0, 0, 0, 0,
        { eventMask: X11.eventMask.Exposure }
      );
      this.X.MapWindow(this.win);
    }

    renderPixel(x, y, c) {
      const index = y * this.width + x;
      this.data[index] = c;
    }

    updateScreen() {

    }
  }
}
