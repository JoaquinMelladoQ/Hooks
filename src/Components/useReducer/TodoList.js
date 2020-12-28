import React from 'react'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <div>
            <ul className="list-group list-group-flush">
                    {
                        todos.map( (todo, i) => (
                            <li
                            key={ todo.id }
                            className="list-group-item"
                            >
                                <p 
                                className={ `${ todo.done && 'complete' }` }
                                onClick={ () => handleToggle( todo.id ) } 
                                >
                                    { i + 1 }. { todo.desc }
                                </p>
                                <button 
                                onClick={ () => handleDelete( todo.id ) }
                                className="btn btn-danger" 
                                >
                                    Delete
                                </button>
                            </li>
                        ) )
                    }
            </ul>
        </div>
    )
}
