import React, { Fragment } from 'react'
import './Counter.css'

export const CounterApp = () => {
    return (
        <Fragment>
            <h1>Counter { 0 }</h1>
            <hr />

            <button className="btn btn-primary" >
                +1
            </button>
        </Fragment>
    )
}
