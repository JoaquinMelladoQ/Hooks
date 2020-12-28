import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../Hooks/useForm'
import './Styles.css'

const initialState = [{
    id: new Date().getTime(),
    desc: 'learn react',
    done: false
}]

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState )

    const [ { description }, handleInputChange ] = useForm({
        description: ''
    })

    console.log(description)

    const handleSubmit = (e) => {
         e.preventDefault()

         const newTodo = {
             id: new Date().getTime(),
             desc: description,
             done: false
         }
     
         const action = {
             type: 'add',
             payload: newTodo
         }
         dispatch(action)
    }




    return (
        <div>
            <h1>Todo App ({ todos.length }) </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <li
                                key={ todo.id }
                                className="list-group-item"
                                >
                                    <p className="text-center" >
                                        { i + 1 }. { todo.desc }
                                    </p>
                                    <button className="btn btn-danger" >
                                        Delete
                                    </button>
                                </li>
                            ) )
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Add todo </h4>
                    <hr />

                        <form onSubmit={ handleSubmit } >
                            <input 
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Learn..."
                                autoComplete="off" 
                                value={ description }
                                onChange={ handleInputChange }
                            />

                            <button
                            type="submit"   
                            className="btn btn-outline-primary mt-1 btn-block" >
                                Add
                            </button>
                        </form>

                </div>
            </div>
        </div>
    )
}

                