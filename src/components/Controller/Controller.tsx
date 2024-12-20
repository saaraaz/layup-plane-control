import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import styles from "./Controller.module.css";

interface ControllerProps {
  yaw: number;
  setYaw: (yaw: number) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  reset: () => void;
}

function Controller(props: ControllerProps) {
  const { yaw, setYaw, speed, setSpeed, reset } = props;

  return (
    <div className={styles.controllerContainer}>
      {/* reset btn */}
      <FontAwesomeIcon
        icon={faGamepad}
        className={styles.resetIcon}
        onClick={reset}
      />
      <div>
        <label>
          Yaw Angle:
          <input
            type="number"
            value={yaw}
            onChange={(e) => setYaw(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Airspeed:
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}

export default Controller;
