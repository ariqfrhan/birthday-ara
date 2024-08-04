import React, {
  useState,
  useEffect,
  useRef,
  MouseEvent,
  TouchEvent,
} from "react";

interface PaperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Paper: React.FC<PaperProps> = ({
  children,
  className = "",
  style = {},
}) => {
  const [holdingPaper, setHoldingPaper] = useState(false);
  const [rotating, setRotating] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [rotation, setRotation] = useState(Math.random() * 30 - 15);
  const paperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMove = (x: number, y: number) => {
      if (holdingPaper) {
        if (rotating) {
          const dirX = x - startX;
          const dirY = y - startY;
          const angle = Math.atan2(dirY, dirX);
          const degrees = (180 * angle) / Math.PI;
          setRotation(degrees);
        } else {
          const deltaX = x - startX;
          const deltaY = y - startY;
          setCurrentX((prevX) => prevX + deltaX);
          setCurrentY((prevY) => prevY + deltaY);
          setStartX(x);
          setStartY(y);
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleMouseUp = () => {
      setHoldingPaper(false);
      setRotating(false);
    };

    const handleTouchEnd = () => {
      setHoldingPaper(false);
      setRotating(false);
    };

    document.addEventListener("mousemove", handleMouseMove as any);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove as any);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove as any);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove as any);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [holdingPaper, rotating, startX, startY]);

  const handleDown = (x: number, y: number, isRightClick: boolean) => {
    setHoldingPaper(true);
    setStartX(x);
    setStartY(y);
    if (isRightClick) {
      setRotating(true);
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    handleDown(e.clientX, e.clientY, e.button === 2);
  };

  const handleTouchStart = (e: TouchEvent) => {
    handleDown(e.touches[0].clientX, e.touches[0].clientY, false);
  };

  return (
    <div
      ref={paperRef}
      className={`paper ${className}`}
      style={{
        ...style,
        transform: `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg)`,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {children}
    </div>
  );
};

export default Paper;
