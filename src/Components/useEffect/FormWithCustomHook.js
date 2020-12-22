import React, { Fragment, useState } from 'react'
import './Effects.css'

export const FormWithCustomHook= () => {


    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    const handleInputChange = ({ target }) => {
    
         setFormState({
             ...formState,
            [target.name]: target.value
         })
    }

    return (
        <Fragment>
             <h1>FormWithCustomHook</h1>
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
             <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="from-control"
                    placeholder="Your email"
                    autocomplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
             </div>

        </Fragment>
    )   
}
