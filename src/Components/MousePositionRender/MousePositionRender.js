import { useEffect, useState } from "react";
import "./MousePositionRender.css";
function GetMousePosition({ render }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return render(mousePosition);
}

function PannelMouseLoggerRender() {
  return (
    <GetMousePosition
      render={(mousePosition) => (
        <div className="pannel-mouse-render-container">
          <p>X:{mousePosition.x}</p>
          <p>Y:{mousePosition.y}</p>
        </div>
      )}
    />
  );
}

function PointMouseLoggerRender() {
  return (
    <GetMousePosition
      render={(mousePosition) => (
        <div className="point-mouse-render-container">
          <p>
            ({mousePosition.x}, {mousePosition.y})
          </p>
        </div>
      )}
    />
  );
}

export default function MousePositionRender() {
  return (
    <div className="mouse-position-render-container">
      <h4 className="comp-title">Using Render Prpos</h4>
      <div className="pannel-point-container">
        <PannelMouseLoggerRender />

        <PointMouseLoggerRender />
      </div>
    </div>
  );
}
