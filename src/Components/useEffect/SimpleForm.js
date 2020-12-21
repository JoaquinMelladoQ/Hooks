import React, { Fragment, useEffect, useState } from 'react'
import './Effects.css'

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
        console.log('hey')
    })

    const handleInputChange = (e) => {
         console.log(e.target.name)
         console.log(e.target.value)
    }

    return (
        <Fragment>
             <h1>useEffect</h1>
             <hr />   

             <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="from-control"
                    placeholder="Your name"
                    autocomplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
             </div>

        </Fragment>
    )   
}
