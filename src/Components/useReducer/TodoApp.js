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
            <h1>Todo App</h1>
            <hr />

            <ul>
                <li>Hello</li>
                <li>World</li>
                <li>Hello again</li>
            </ul>
        </div>
    )
}
