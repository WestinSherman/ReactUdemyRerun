export default function ColorBox({ colors }) {
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    const style = {
        backgroundColor: randColor,
        width: "200px",
        height: "200px",
        border: "1px solid",
    }
    return (
        <div>
            <h1>Color Box</h1>
            <div className="ColorBox" style={style}>

            </div>
        </div>
    )
}