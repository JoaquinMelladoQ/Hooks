import React, { useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'

import '../useEffect/Effects.css'


export const MemoHook = () => {

    const { counter, increment } = useCounter( 10 )
    const [show, setShow] = useState(true)

    const heavyProcess = ( iterations ) => {
        for (let i = 0; i < iterations; i++) {
            console.log('There we are...')
        }
        return `${ iterations } iterations done`
    }

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />

            <p>{ heavyProcess( counter ) }</p>

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
