import { useState } from 'react';

export default function Counter() {
    const [num, setNum] = useState(5);
    console.log("COMPONENT RENDERED AGAIN.");
    console.log(`num: ${num}`);
    const changeNum = () => {
        setNum(num + 1);
    }
    return (
        <div>
            <p>The count is: {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}