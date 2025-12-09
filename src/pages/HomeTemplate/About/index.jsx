import React from 'react';
import {useMagicColor} from "../Hooks/_custom/useMagicColor.js";

function About() {
    const color = useMagicColor()
    console.log("🚀 ~ About ~ color: ", color);
    return (
        <div>Custom Hook</div>
    );
}

export default About;