interface Env {
  reset();

  loadFromState(data: Uint8Array);
  getState(): Uint8Array;

  getScore();
  camera: Uint8Array;
  isDone: boolean;

  actions: number[];
  step(action: number);
  render();

  // TODO in mind:
  // // game specfic function to summerize display.
  // getCameraSummery();
  // recorder: {
  //   start(fps: number);
  //   save(filename: string): Promise<null>;
  //   pause();
  //   resume();
  // }
}
