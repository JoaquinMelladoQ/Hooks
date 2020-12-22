import React, { useRef } from 'react'
import '../useState/Counter.css'

export const FocusScreen = () => {

    const inputRef = useRef()
    // console.log(ref)

    const handleClick = () => {
        inputRef.select()
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input className="form-control" placeholder="Your name" 
            />

            <button
             className="btn btn-outline-info mt-2"
             onClick={handleClick}            
            >
                Focus
            </button>

        </div>
    )
}
