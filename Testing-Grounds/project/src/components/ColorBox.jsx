import { useState } from "react";
import "../styles/ColorBox.css";

export default function ColorBox({ colors }) {
    const [randColor, setRandColor] = useState(null);

    const handleClick = () => {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        setRandColor(newColor);
    };
    const style = {
        backgroundColor: randColor || colors[0], // Default to first color in array before clicking
    };

    return (
        <div>
            <div className="ColorBox" style={style} onClick={handleClick}></div>
        </div>
    );
}