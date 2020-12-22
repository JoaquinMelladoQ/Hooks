import React from 'react'
import '../useState/Counter.css'

export const FocusScreen = () => {


    const handleClick = () => {
        document.querySelector('input').select()
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
