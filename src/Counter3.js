import React from 'react'
import useCounter from './useCounter'

const Counter3 = () => {

    const [counter, increment, decrement] = useCounter()

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>

    )
}

export default Counter3
