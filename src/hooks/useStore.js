import create from "zustand";
import { nanoid } from "nanoid";
export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [],
  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          id: nanoid(),
          texture: state.texture,
          position: [x, y, z],
        },
      ],
    }));
  },
  removeCube: (x, y, z) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => {
        const [x, y, z] = cube.position;
        return x !== x || y !== y || z !== z;
      }),
    }));
  },
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));
