import React, { useMemo, useState } from 'react'
const cal = (number) => {
    console.log("Thực hiện tính toán");
    return number * 10;
}
function DemoUseMemo() {
    const [data, setData] = useState(100);
    const [first, setfirst] = useState(0)
    const result = useMemo(() => cal(data), [data]);
    // const result = cal(data);
    return (
        <>
            <div>DemoUseMemo</div>
            <h1>Data {data}</h1>
            <h1>First {first}</h1>
            <h1>KQ {result} </h1>
            <button onClick={() => setData(data + 10)}>click data</button>
            <button onClick={() => setfirst(first + 10)}>click first</button>
        </>
    )
}

export default DemoUseMemo