import React, { useReducer } from 'react'
import './Styles.css'

const initialState = [{
    id: new Date().getTime(),
    desc: 'learn react',
    done: false
}]

export const TodoApp = () => {

    const [ state ] = useReducer( reducer, initialState )

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
