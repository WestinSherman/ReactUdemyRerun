import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function EmojiClicker() {
    const [emojis, setEmojis] = useState(["👿"])
    return (
        <div>
            {emojis.map((e) => (
                <span style={{ fontSize: "4rem" }}>{e}</span>
            ))}
            <button>Add Emoji</button>
        </div>
    )
}