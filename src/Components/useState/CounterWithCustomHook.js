import React, { Fragment } from 'react'
import './Counter.css'

export const CounterWithCustomHook = () => {
    return (
        <Fragment>
            <h1>Counter with hook { 0 }</h1>
            <hr />
            <button className="btn btn-primary" > +1 </button>
            <button className="btn btn-success" > -1 </button>
        </Fragment>
    )
}
