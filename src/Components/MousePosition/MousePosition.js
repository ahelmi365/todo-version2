import { useEffect, useState } from "react";
import "./MousePosition.css";

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMoveChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", handleMouseMoveChange);
      return () => {
        window.removeEventListener("mousemove", handleMouseMoveChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (mousePosition) {
    return (
      <div className="panel-mouselogger-container">
        <p>X: {mousePosition.x}</p>
        <p>Y: {mousePosition.y}</p>
      </div>
    );
  } else {
    <>{null}</>;
  }
};
const PointMouseLogger = ({ mousePosition }) => {
  if (mousePosition) {
    return (
      <div className="point-mouselogger-container">
        <p>
          ({mousePosition.x},{mousePosition.y})
        </p>
      </div>
    );
  } else {
    return <>{null}</>;
  }
};

const PannelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

export default function MousePosition() {
  return (
    <div className="mouse-position-container">
      <h4 className="comp-title">Using HOC</h4>
      <div className="mouse-tracker-container">
        <PannelMouseTracker />
        <PointMouseTracker />
      </div>
    </div>
  );
}
