import React, { useState } from 'react'
import '../../Components/useEffect/Effects.css'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)
    const increment = () => {
        setCounter( counter + 1 )
    }
    return (
        <div>
            <h1>CallBack Hook: { counter } </h1>
            <hr />
        </div>
    )
}
