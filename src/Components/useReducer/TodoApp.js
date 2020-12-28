import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './Styles.css'

const initialState = [{
    id: new Date().getTime(),
    desc: 'learn react',
    done: false
}]

export const TodoApp = () => {

    const [ todos ] = useReducer( todoReducer, initialState )
    console.log(todos)

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

                        <form>
                            <input 
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Learn..."
                                autoComplete="off" 
                            />

                            <button className="btn btn-outline-primary mt-1 btn-block" >
                                Add
                            </button>
                        </form>

                </div>
            </div>
        </div>
    )
}

                