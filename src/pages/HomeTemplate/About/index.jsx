import React from "react";
import { useMagicColor } from "../Hooks/_custom/useMagicColor.js";

function About() {
  const color = useMagicColor();
  return <div>Custom Hook {color}</div>;
}

export default About;
