import React, { useState } from "react";

function ShadowButton() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <span className="wrapper">
      <button onClick={handleClick}>Times Clicked: {counter}</button>
    </span>
  );
}

export default ShadowButton;
