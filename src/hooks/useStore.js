import create from "zustand";
import { nanoid } from "nanoid";
export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [
    {
      id: nanoid(),
      position: [1, 0, 1],
      texture: "dirt",
    },
    {
      id: nanoid(),
      position: [1, 1, 1],
      texture: "log",
    },
  ],
  addCube: () => {},
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));
