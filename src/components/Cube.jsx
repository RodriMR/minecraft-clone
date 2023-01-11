import React from "react";
import { useBox } from "@react-three/cannon";
import * as textures from "../images/textures.js";
import { useState } from "react";
import { useStore } from "../hooks/useStore.js";
export default function Cube({ position, texture }) {
  const [isHovered, setIsHovered] = useState(false);
  const [removeCube] = useStore((state) => [state.removeCube]);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const activeTexture = textures[texture + "Texture"];
  return (
    <mesh
      onClick={(e) => {
        if (e.altKey) {
          e.stopPropagation();
          const { x, y, z } = ref.current.position;
          removeCube(x, y, z);
        }
      }}
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref}
    >
      <boxBufferGeometry attach={"geometry"} />
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        map={activeTexture}
        attach="material"
      />
    </mesh>
  );
}
