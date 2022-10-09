import React from "react";
import { RiHome3Line, RiArchiveLine } from "react-icons/ri";
import {BiAtom} from "react-icons/bi";

const ReactIcon = () => {
  return (
    <div>
      ReactIcon <RiHome3Line style={{ fontSize: "50px", color: "red" }} />{" "}
      <RiArchiveLine style={{ fontSize: "50px", color: "red" }} />{" "}
      <BiAtom style={{ fontSize: "50px", color: "red" }} />{" "}
    </div>
  );
};

export default ReactIcon;
