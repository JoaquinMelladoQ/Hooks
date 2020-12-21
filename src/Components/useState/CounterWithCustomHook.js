import React, { Fragment } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import './Counter.css'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement } = useCounter()

    return (
        <Fragment>
            <h1>Counter with hook { state }</h1>
            <hr />
            <button onClick={increment} className="btn btn-primary" > +1 </button>
            <button onClick={decrement} className="btn btn-success" > -1 </button>
        </Fragment>
    )
}
