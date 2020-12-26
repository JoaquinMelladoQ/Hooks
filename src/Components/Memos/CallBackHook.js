import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'
import '../../Components/useEffect/Effects.css'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)
    const increment = () => {
        setCounter( counter + 1 )
    }

    useCallback( () => {
        setCounter( counter + 1 )
    }, [setCounter] )

    return (
        <div>
            <h1>CallBack Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}
