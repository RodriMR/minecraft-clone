import { useStore } from "../hooks/useStore";

export default function Menu() {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  return (
    <div className="menu">
      <div className="controls">
        <h3>Controls:</h3>
        <p>Change Blocks - 1-5 </p>
        <p>Place Blocks - L/R Click </p>
        <p> Remove Block - Alt + L/R Click </p>
        <p>Movement - WASD-Space </p>
        <p>Cursor - Esc </p>
      </div>

      <button onClick={() => saveWorld()}>Save</button>
      <button onClick={() => resetWorld()}>Reset</button>
    </div>
  );
}
