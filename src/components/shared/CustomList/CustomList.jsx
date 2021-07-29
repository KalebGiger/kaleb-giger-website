import React from 'react';
import { Row, Col } from "react-bootstrap"

export function CustomList(props) {

    const { list } = props;

    return (
        <Row className='bio'>
            <Col>
                <ul>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>MySQL</li>
                </ul>
            </Col>
            <Col>
                <ul>
                    <li>JavaScript</li>
                    <li>Redux</li>
                    <li>MongoDB</li>
                </ul>
            </Col>
        </Row>
    )
}