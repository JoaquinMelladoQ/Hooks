import React, { memo } from 'react'

export const Small = memo(({ value }) => {

    console.log('You call me again!')
    return (
        <small>
            { value }
        </small>
    )
})
