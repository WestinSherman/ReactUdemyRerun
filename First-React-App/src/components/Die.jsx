export default function Die({ numSides }) {
    console.log(numSides);
    const roll = Math.floor(Math.random() * 6) + 1
    return <p>{numSides}-sided Die roll: {roll}</p>
}