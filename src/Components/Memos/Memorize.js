import React, { useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { Small } from './Small'
import '../useEffect/Effects.css'


export const Memorize = () => {

    const { counter, increment } = useCounter( 10 )
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter: <Small value={ counter } /></h1>
            <hr />

            <button className="btn btn-primary"  onClick={ increment } >
                Add
            </button>
            <button className="btn btn-success ml-3"
                onClick={() => {
                    setShow( !show )
                }}
            >
                Show/Hide { JSON.stringify(show) }
            </button>

        </div>
    )
}
