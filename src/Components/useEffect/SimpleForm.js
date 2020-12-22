import React, { Fragment, useEffect, useState } from 'react'
import './Effects.css'
import { Message } from './Message'

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
        // console.log('hey')
    }, [])
    useEffect(() => {
        // console.log('hey from formState')
    }, [formState] )
    useEffect(() => {
        // console.log('hey from email')
    }, [email] )

    const handleInputChange = ({ target }) => {
    
         setFormState({
             ...formState,
            [target.name]: target.value
         })
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

             { (name === '123') && <Message /> }

        </Fragment>
    )   
}
