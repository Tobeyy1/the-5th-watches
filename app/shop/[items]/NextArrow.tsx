import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import classes from "./Items.module.scss";

type Props = {
  handleItemClick: (index: number) => void;
};

function NextArrow({ handleItemClick }: Props) {
  const [arrowPos, setArrowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const parentWidthInPx = e.currentTarget.offsetWidth;
    const parentHeightInPx = e.currentTarget.offsetHeight;
    const positionInPx = e.nativeEvent.offsetX;
    const positionInPercent = (positionInPx / parentWidthInPx) * 100;
    const positionYinPercent = (e.nativeEvent.offsetY / parentHeightInPx) * 100;
    setArrowPos({ x: positionInPercent, y: positionYinPercent });
  };

  return (
    <button
      title="Previous Arrow"
      className={classes.next__arrow}
      onClick={() => handleItemClick(1)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setArrowPos({
          x: 50,
          y: 50,
        });
      }}
    >
      <IoMdArrowForward
        className={classes.icon}
        style={{
          position: "absolute",
          top: `${arrowPos.y}%`,
          //   left: `${arrowPos.x}%`,
        }}
      />
    </button>
  );
}

export default NextArrow;
