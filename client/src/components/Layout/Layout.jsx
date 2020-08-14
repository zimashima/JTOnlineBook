import React from 'react'
import Header from './Header'
import { Container, Row } from 'react-bootstrap'

export function Layout({ children }) {

    return (
        <Container fluid="md">
            <Row className="text-right">
                <Header />
            </Row>
                { children }
        </Container>
    )
}
