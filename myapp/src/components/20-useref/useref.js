import React, { useState } from "react";
import { useRef } from "react";

const Useref = () => {
  const inputRef = useRef();
  const [ph, setPh] = useState("");

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input id="txtName" type="text" placeholder={ph} ref={inputRef} />
      <button onClick={handleFocus}>Click to focus</button>
    </div>
  );
};

export default Useref;
