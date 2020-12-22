import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        
        const mouseMove = (e) => {
            const coors = { x: e.y, y: e.y }
            console.log(coors)
        }
        
        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>You are great!</h3>
        </div>
    )
}
