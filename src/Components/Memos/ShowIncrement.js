import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('I was generated again')
    return (
        <button className="btn btn-primary" 
            onClick ={() => {
                increment()
            }}
            >
            Increment
        </button >
    )
}
)