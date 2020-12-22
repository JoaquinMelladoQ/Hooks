import React, { Fragment } from 'react'
import { useForm } from '../../Hooks/useForm'
import './Effects.css'

export const FormWithCustomHook= () => {


    const [formState, setFormState] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formState

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
                    placeholder="Enter your name"
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
                    placeholder="Enter your email"
                    autocomplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
             </div>
             <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="from-control"
                    placeholder="Enter your password"
                    autocomplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
             </div>

        </Fragment>
    )   
}
