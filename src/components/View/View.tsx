// main parent component
import { useState } from "react";
import styles from "./View.module.css";
import Controller from "../Controller/Controller";
import Canvas from "../Canvas/Canvas";

function View() {
  const [yaw, setYaw] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [points, setPoints] = useState<number[]>([250, 250]);

  //gets back to the starting point
  const reset = () => {
    setYaw(0);
    setSpeed(0);
    setPoints([250, 250]);
  };

  return (
    <div className={styles.viewContainer}>
      <h1>LayUp Airplane</h1>
      <Controller
        yaw={yaw}
        setYaw={setYaw}
        speed={speed}
        setSpeed={setSpeed}
        reset={reset}
      />
      <Canvas yaw={yaw} speed={speed} points={points} setPoints={setPoints} />
    </div>
  );
}

export default View;
