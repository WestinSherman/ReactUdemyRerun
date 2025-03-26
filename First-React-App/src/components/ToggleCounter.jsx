import { useState } from 'react';
import '../styles/Toggler.css';

export default function ToggleCounter() {
    const [isCool, setIsCool] = useState(true);
    const [count, setCount] = useState(0);
    const toggleIsCool = () => setIsCool(!isCool);
    const incrementCount = () => setCount(count + 2);
    return (
        <div>
            <p className="Toggler" onClick={toggleIsCool}>
                {isCool ? "😎" : "😑"}
            </ p>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}