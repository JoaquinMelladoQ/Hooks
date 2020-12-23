import React, { useState, useMemo } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { heavyProcess } from '../../Helpers/HeavyProcess'

import '../useEffect/Effects.css'


export const MemoHook = () => {

    const { counter, increment } = useCounter( 10 )
    const [show, setShow] = useState(true)
    const memoHeavyProcess = useMemo(() => heavyProcess( counter ), [ counter ])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />

            <p>{ memoHeavyProcess }</p>

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
