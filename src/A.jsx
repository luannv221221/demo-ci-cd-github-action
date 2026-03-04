import React, { useContext } from 'react'
import C from './C'
import { context } from './App2'

function A() {
    const { fullName } = useContext(context)
    return (
        <>
            <div>A fullName Họ Và Tên : {fullName}</div>
            <C />
        </>
    )
}

export default A