import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { TextItem } from '../../components'

export function Paragraph({ query, row, pIndex, value }) {

    return (
        <>
            <Row className={`${pIndex % 2 === 0 ? ' bg-light': '' } p-1`}>
                <Col xs="11">
                <p key={`p${pIndex}`}>
                    {
                        row.map((textItem, tIndex)=> {
                            if (query.length > 0 && textItem.text.search(query) === -1){
                                return null
                            } else {
                                return <TextItem
                                key={ `${pIndex}${tIndex}`}
                                data={textItem}
                                value={ value }
                                />
                            }
                        })
                    }
                </p>
                </Col>
                <Col xs="1">
                    P. {pIndex+1}
                </Col>
            </Row>
        </>
    )
}
