import React from 'react'
import { useFetch } from '../../Hooks/useFetch'
import './Example.css'

export const MultipleCustomHooks = () => {

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    // console.log(state)
    const { author, quote } = !!data && data[0]

    console.log(author, quote)

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

        </div>
    )
}
