import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { SearchForm, Paragraph, Layout } from '../components'
import axios from 'axios'

export function Home({ value }) {

    const [query, setQuery] = useState("")
    const [display, setDisplay] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            try {
              let dataItems = await axios.get("/api/dataItems")
              let entries = Object.values(dataItems.data)
              setDisplay(entries)
            }
           catch (err){
              console.log(err)
           }
        }
        fetchData()
    }, [display])
    
    const handleChange = e => {
        setQuery(e.target.value)
    }

    return (
        <Layout>
            <Row>
                <Col md="3" className="bg-primary">
                    <SearchForm query={query} handleChange={handleChange}/>
                </Col>
                <Col md="9">
                    {
                        display.map((row, pIndex) =>
                            <Paragraph
                                key={ pIndex }
                                pIndex={ pIndex }
                                row={ row } 
                                value={ value }
                                query={ query }
                            />)
                    }
                </Col>
            </Row>
        </Layout>
    )
}
