import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const [total, setTotal] = useState(1)
    const handleClick = useCallback(() => {
        console.log("OK da click");
        setTotal(total + 10);
    }, []);
    return (
        <>
            <div>ParentComponent</div>
            <h1>{total}</h1>
            <ChildComponent handleClick={handleClick} />
        </>
    )
}

export default ParentComponent