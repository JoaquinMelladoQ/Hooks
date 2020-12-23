import React, { useState } from 'react'
import '../useEffect/Effects.css'
import { MultipleCustomHooks } from '../Example/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> }
            <button className="btn btn-primary mt-2">
                Show/Hide
            </button>
        </div>
    )
}
