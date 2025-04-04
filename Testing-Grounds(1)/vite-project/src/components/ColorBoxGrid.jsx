import "../styles/ColorBoxGrid.css";
import ColorBox from "./ColorBox";

function ColorBoxGrid({ colors }) {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(
            <ColorBox colors={colors} key={i} />
        );
    }
    return (
        <div className="ColorBoxGrid">
            {boxes}
        </div>
    );
}

export default ColorBoxGrid;