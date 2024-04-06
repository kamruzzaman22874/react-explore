import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        const newCount = count + 1
        setCount(newCount)
    }
    const handleCounts = () => {
        const newCount = count - 1
        setCount(newCount)
    }
    return (
        <div style={{ border: "2px solid purple", padding: "20px" }}>
            <p>{count}</p>
            <button onClick={handleCount}>Increment</button>
            <button onClick={handleCounts}>Decrement</button>
        </div >
    );
};

export default Count;