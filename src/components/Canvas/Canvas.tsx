import React, { useEffect, useRef } from "react";
import styles from "./Canvas.module.css";

interface CanvasProps {
  yaw: number;
  speed: number;
  points: number[]; // array of points representing the trajectory, initially set to [250, 250]
  setPoints: (points: number[]) => void;
}

const Canvas: React.FC<CanvasProps> = ({ yaw, speed, points, setPoints }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (context) {
      // get the new position based on current yaw and speed
      const lastX = points[points.length - 2];
      const lastY = points[points.length - 1];

      // convert yaw from degrees to radians
      const yawInRadians = (yaw * Math.PI) / 180;

      // Math.cos(yawInRadians) gives the x-component of the movement
      // newX is calculated by adding the x-component to the last x position
      const newX = lastX + speed * Math.cos(yawInRadians);
      // Math.sin(yawInRadians) gives the y-component of the movement
      // newY is calculated by adding the y-component to the last y position
      const newY = lastY + speed * Math.sin(yawInRadians);

      // update points with new position
      setPoints([...points, newX, newY]);

      // clear canvas
      if (canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }

      // draw trajectory
      context.beginPath();
      context.moveTo(points[0], points[1]); // start from the initial point (set in the useState in the parent)
      for (let i = 2; i < points.length; i += 2) {
        context.lineTo(points[i], points[i + 1]); // draw lines to each subsequent point
      }
      context.stroke(); // draw the lines
    }
  }, [yaw, speed, points, setPoints]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      width={500}
      height={500}
    />
  );
};

export default Canvas;
