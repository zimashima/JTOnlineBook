import React from 'react'
import { Form } from 'react-bootstrap'

export function SearchForm({ query, handleChange }) {
    
    return (
        <>
            <Form.Control className="mt-3" type="text" placeholder="Search Text..." value={query} onChange={handleChange}/>
        </>
    )
}
