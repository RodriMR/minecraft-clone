import { useStore } from "../hooks/useStore.js";
import {
  dirtImg,
  grassImg,
  glassImg,
  logImg,
  woodImg,
} from "../images/images.js";
import { useKeyboard } from "../hooks/useKeyboard.js";
import { useEffect, useState } from "react";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
};
export default function TextureSelect() {
  const [visible, setVisible] = useState(true);
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  const { dirt, grass, glass, wood, log } = useKeyboard();
  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log,
    };
    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );
    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
    }
  }, [dirt, grass, glass, wood, log]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);
    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [texture]);
  if (!visible) return null;

  return (
    <div className={`texture-select ${visible ? "" : "hidden"}`}>
      {Object.entries(images).map(([imgKey, img]) => {
        return (
          <img
            className={texture === imgKey.replace("Img", "") ? "selected" : ""}
            src={img}
            alt={imgKey}
            key={imgKey}
          />
        );
      })}
    </div>
  );
}
