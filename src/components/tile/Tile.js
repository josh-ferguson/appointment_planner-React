import React from "react";

export const Tile = ({value}) => {
  const valueArray = Object.values(value);
  console.log(valueArray)

  return (
    <div className="tile-container">
    {valueArray.map((val, index) => {
      if (index === 0) {
        return (
          <p className="tile-title" key={index}>
            {val}
          </p>
        );
      } else {
        return (
          <p className="tile" key={index}>
            {val}
          </p>
        );
      }
    })}
  </div>
  );
};
