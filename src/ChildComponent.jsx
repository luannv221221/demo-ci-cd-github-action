import React from 'react'

function ChildComponent({ handleClick }) {
    console.log("Con render");
    return (
        <>
            <div>ChildComponent</div>
            <button onClick={handleClick}>Tang</button>
        </>
    )
}

export default ChildComponent