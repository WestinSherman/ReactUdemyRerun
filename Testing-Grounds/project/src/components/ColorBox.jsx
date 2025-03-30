export default function ColorBoxs({ colors }) {
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    const handleClick = () => {
        const randColor = colors[Math.floor(Math.random() * colors.length)];
        document.querySelector(".ColorBox").style.backgroundColor = randColor;
        console.log(randColor);

    }
    const style = {
        backgroundColor: randColor,
        width: "200px",
        height: "200px",
        border: "1px solid",
    }
    return (
        <div>
            <h1>Color Box</h1>
            <div className="ColorBox" style={style} onClick={handleClick}>

            </div>
        </div>
    )
}