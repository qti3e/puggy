export abstract class Env {
  reset(){}

  loadFromState(data: Uint8Array){}
  getState(): Uint8Array{}

  getReward(){}
  camera: Uint8Array;
  isDone: boolean;

  actions: number[];
  step(action: number){}
  render(){}

  // TODO in mind:
  // // game specfic function to summerize display.
  // getCameraSummery();
  // // mp4/gif output
  // recorder: {
  //   start(fps: number);
  //   save(filename: string): Promise<null>;
  //   pause();
  //   resume();
  // }
}

export interface EnvTable {
  [key: string]: Env
};
