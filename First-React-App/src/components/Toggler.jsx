import { useState } from 'react';
import '../styles/Toggler.css';
export default function Toggler() {
    const [isCool, setIsCool] = useState(true);
    const toggleIsCool = () => setIsCool(!isCool);
    return <p className="Toggler" onClick={toggleIsCool}>
        {isCool ? "😎" : "😑"}
    </ p>
}