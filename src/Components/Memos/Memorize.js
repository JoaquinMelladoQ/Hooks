import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import '../useEffect/Effects.css'


export const Memorize = () => {

    const { counter, increment } = useCounter( 10 )

    return (
        <div>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />

            <button className="btn btn-primary"  onClick={ increment } >
                Add
            </button>

        </div>
    )
}
