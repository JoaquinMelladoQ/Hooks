import React, { Fragment, useState  } from 'react'
import './Counter.css'

export const CounterApp = () => {

    const [Counter, setCounter] = useState(10)

    return (
        <Fragment>
            <h1>Counter { Counter }</h1>
            <hr />

            <button 
            className="btn btn-primary"
            onClick={ () => {
                setCounter( Counter + 1 )
            } }
            >
                +1
            </button>
        </Fragment>
    )
}
