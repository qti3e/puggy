import * as types from "./types";

import { superMarioBros } from "./envs/superMarioBros";

const envTable = {
  "superMarioBros": superMarioBros
};

export function createEnv(envName: string): types.Env {
  return new envTable[envName];
}
