import { useState } from "react";
import "../styles/ColorBox.css";

export default function ColorBox() {
    const [color, setColor] = useState("cyan");
    const changeColor = () => {
        setColor("orange");
        return (
            <div
                className="ColorBox"
                onClick={changeColor}
                style={{ backgroundColor: color }}
            ></div >
        );
    }
}