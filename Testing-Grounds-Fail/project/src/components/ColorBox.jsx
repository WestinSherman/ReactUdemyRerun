import { useState } from "react";
import "../styles/ColorBox.css";

function randomChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export default function ColorBox({ colors }) {
    const [color, setColor] = useState(randomChoice(colors));
    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor);
    }
    return (
        <div
            className="ColorBox"
            onClick={changeColor}
            style={{ backgroundColor: color }}
        ></div>
    );
}