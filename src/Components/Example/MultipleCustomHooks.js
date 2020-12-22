import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'
import './Example.css'

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1)
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
    const { author, quote } = !!data && data[0]
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">
                                { quote }
                            </p>
                            <footer className="blockquote-footer">
                                { author }
                            </footer>
                        </blockquote>
                    )
            }
            <button className='btn btn-primary' onClick={increment}>
                Next quote
            </button>
            <button className='btn btn-success' onClick={decrement}>
                Previous quote
            </button>

        </div>
    )
}
