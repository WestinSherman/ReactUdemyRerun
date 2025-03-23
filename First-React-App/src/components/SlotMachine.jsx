export default function SlotMachine({ slot1, slot2, slot3 }) {
    const isWinner = slot1 === slot2 && slot2 === slot3;
    const styles = { color: isWinner ? "green" : "red" };
    return (
        <div style={styles}>
            <h1>{slot1} {slot2} {slot3}</h1>
            {(slot1 === slot2 && slot2 === slot3) ? <h2>You Win!</h2> : <h2>You Lose!</h2>}
            {isWinner && <h3>Congrats</h3>}
        </div >
    )
}