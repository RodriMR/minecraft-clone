import { usePlane } from "@react-three/cannon";
import React from "react";
import { useStore } from "../hooks/useStore.js";
import { groundTexture } from "../images/textures.js";
export default function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const [addCube] = useStore((state) => [state.addCube]);

  groundTexture.repeat.set(100, 100);

  const handleClickGround = (event) => {
    event.stopPropagation();
    const [x, y, z] = Object.values(event.point);
    addCube(Math.round(x), Math.ceil(y), Math.ceil(z));
  };

  return (
    <mesh onClick={handleClickGround} ref={ref}>
      <planeBufferGeometry attach={"geometry"} args={[100, 100]} />
      <meshStandardMaterial attach={"material"} map={groundTexture} />
    </mesh>
  );
}
