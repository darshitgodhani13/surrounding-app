import React, { useState } from "react";
import "./outer.css";

const OuterEffect = () => {
  const [colors, setColors] = useState(Array(20 * 20).fill("lightgray"));
  const [surroundingRuning, setSurroundingRuning] = useState(false);

  const getRandomColor = () => {
    return "#000000";
  };

  const changeSurroundingColors = (newColors, index, distance, maxDistance) => {
    const row = Math.floor(index / 20);
    const col = index % 20;

    if (row - distance >= 0) {
      if (col - distance >= 0)
        newColors[index - 20 * distance - distance] = getRandomColor();

      let topLefttoRight =
        index - 20 * distance - (index - 20 * distance - distance);
      if (row - distance >= 0)
        for (let i = 1; i <= topLefttoRight; i++) {
          newColors[index - 20 * distance - distance + i] = getRandomColor();
        }
      newColors[index - 20 * distance] = getRandomColor();
      if (col + distance < 20)
        newColors[index - 20 * distance + distance] = getRandomColor();

      let toptoRight =
        index - 20 * distance + distance - (index - 20 * distance);
      for (let i = 1; i <= toptoRight; i++) {
        newColors[index - 20 * distance + distance - i] = getRandomColor();
      }
    }
    if (row + distance < 20) {
      if (col - distance >= 0)
        newColors[index + 20 * distance - distance] = getRandomColor();
      newColors[index + 20 * distance] = getRandomColor();

      if (col + distance < 20)
        newColors[index + 20 * distance + distance] = getRandomColor();
    }
    if (col - distance >= 0) newColors[index - distance] = getRandomColor();
    if (col + distance < 20) newColors[index + distance] = getRandomColor();
    const redOrang =
      (index - distance - (index - 20 * distance - distance)) / 20;
    if (
      (row - distance >= 0 && col - distance >= 0) ||
      (row + distance < 20 && col - distance >= 0)
    ) {
      for (let i = 1; i <= redOrang; i++) {
        newColors[index - 20 * distance - distance + i * 20] = getRandomColor();
      }
    }

    const blueViolet =
      (index + distance - (index - 20 * distance + distance)) / 20;

    if ((col + distance < 20 && col - distance >= 0) || col + distance < 20) {
      for (let i = 1; i <= blueViolet; i++) {
        newColors[index + distance - i * 20] = getRandomColor();
      }
    }

    const violetgreen =
      (index + 20 * distance + distance - (index + distance)) / 20;
    if (col + distance < 20) {
      for (let i = 1; i <= violetgreen; i++) {
        newColors[index + 20 * distance + distance - i * 20] = getRandomColor();
      }
    }

    const greenBrown =
      index + 20 * distance + distance - (index + 20 * distance);
    for (let i = 1; i <= greenBrown; i++) {
      newColors[index + 20 * distance + i] = getRandomColor();
    }

    const brownyellow =
      index + 20 * distance - (index + 20 * distance - distance);
    if (row - distance >= 0)
      for (let i = 1; i <= brownyellow; i++) {
        newColors[index + 20 * distance - i] = getRandomColor();
      }
    const orangeyellow =
      (index + 20 * distance - distance - (index - distance)) / 20;
    if (row - distance >= 0)
      for (let i = 1; i <= orangeyellow; i++) {
        newColors[index + 20 * distance - distance - i * 20] = getRandomColor();
      }
    setColors([...newColors]);

    if (distance < maxDistance) {
      setSurroundingRuning(true);
      setTimeout(() => {
        changeSurroundingColors(newColors, index, distance + 1, maxDistance);
      }, 1000);

      setTimeout(
        ((index, distance, maxDistance) => {
          return () =>
            changeSurroundingInitioalColors(
              newColors,
              index,
              distance,
              maxDistance
            );
        })(index, distance, maxDistance),
        1000
      );
    } else {
      setSurroundingRuning(false);
    }
  };

  const changeSurroundingInitioalColors = (
    newColors,
    index,
    distance,
    maxDistance
  ) => {
    const row = Math.floor(index / 20);
    const col = index % 20;
    newColors[index] = "#d3d3d3";
    if (row - distance >= 0) {
      if (col - distance >= 0)
        newColors[index - 20 * distance - distance] = "#d3d3d3";

      let topLefttoRight =
        index - 20 * distance - (index - 20 * distance - distance);
      if (row - distance >= 0)
        for (let i = 1; i <= topLefttoRight; i++) {
          newColors[index - 20 * distance - distance + i] = "#d3d3d3";
        }
      newColors[index - 20 * distance] = "#d3d3d3";
      if (col + distance < 20)
        newColors[index - 20 * distance + distance] = "#d3d3d3";

      let toptoRight =
        index - 20 * distance + distance - (index - 20 * distance);
      for (let i = 1; i <= toptoRight; i++) {
        newColors[index - 20 * distance + distance - i] = "#d3d3d3";
      }
    }
    if (row + distance < 20) {
      if (col - distance >= 0)
        newColors[index + 20 * distance - distance] = "#d3d3d3";
      newColors[index + 20 * distance] = "#d3d3d3";

      if (col + distance < 20)
        newColors[index + 20 * distance + distance] = "#d3d3d3";
    }
    if (col - distance >= 0) newColors[index - distance] = "#d3d3d3";
    if (col + distance < 20) newColors[index + distance] = "#d3d3d3";
    const redOrang =
      (index - distance - (index - 20 * distance - distance)) / 20;
    if (
      (row - distance >= 0 && col - distance >= 0) ||
      (row + distance < 20 && col - distance >= 0)
    ) {
      for (let i = 1; i <= redOrang; i++) {
        newColors[index - 20 * distance - distance + i * 20] = "#d3d3d3";
      }
    }

    const blueViolet =
      (index + distance - (index - 20 * distance + distance)) / 20;

    if ((col + distance < 20 && col - distance >= 0) || col + distance < 20) {
      for (let i = 1; i <= blueViolet; i++) {
        newColors[index + distance - i * 20] = "#d3d3d3";
      }
    }

    const violetgreen =
      (index + 20 * distance + distance - (index + distance)) / 20;
    if (col + distance < 20) {
      for (let i = 1; i <= violetgreen; i++) {
        newColors[index + 20 * distance + distance - i * 20] = "#d3d3d3";
      }
    }

    const greenBrown =
      index + 20 * distance + distance - (index + 20 * distance);
    for (let i = 1; i <= greenBrown; i++) {
      newColors[index + 20 * distance + i] = "#d3d3d3";
    }

    const brownyellow =
      index + 20 * distance - (index + 20 * distance - distance);
    if (row - distance >= 0)
      for (let i = 1; i <= brownyellow; i++) {
        newColors[index + 20 * distance - i] = "#d3d3d3";
      }
    const orangeyellow =
      (index + 20 * distance - distance - (index - distance)) / 20;
    if (row - distance >= 0)
      for (let i = 1; i <= orangeyellow; i++) {
        newColors[index + 20 * distance - distance - i * 20] = "#d3d3d3";
      }
    setColors([...newColors]);
  };

  const handleBoxClick = (index) => {
    const newColors = [...colors];
    newColors[index] = getRandomColor();
    setColors([...newColors]);

    setTimeout(() => {
      changeSurroundingColors(
        newColors,
        index,
        1,
        Math.max(
          19 - Math.floor(index / 20),
          Math.floor(index / 20),
          19 - (index % 20),
          index % 10
        )
      );
    }, 1000);
  };

  const renderBoxes = () => {
    return colors.map((color, index) => (
      <div
        key={index}
        className={surroundingRuning ? "noclick" : "box"}
        style={{ backgroundColor: color }}
        onClick={surroundingRuning ? null : () => handleBoxClick(index)}
      >
      </div>
    ));
  };

  return (
    <div className="outer-div">
      <div className="grid-container">{renderBoxes()}</div>
    </div>
  );
};
export default OuterEffect;
