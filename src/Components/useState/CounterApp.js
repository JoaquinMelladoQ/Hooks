import React, { Fragment, useState  } from 'react'
import './Counter.css'

export const CounterApp = () => {

    const [{ Counter1, Counter2 }, setCounter] = useState({
        Counter1: 10,
        Counter2: 20,
    })

    return (
        <Fragment>
            <h1>Counter { Counter1 }</h1>
            <h1>Counter { Counter2 }</h1>
            <hr />

            <button 
            className="btn btn-primary"
            onClick={ () => {
                setCounter({
                    Counter1: Counter1 + 1
                })
            } }
            >
                +1
            </button>
        </Fragment>
    )
}
