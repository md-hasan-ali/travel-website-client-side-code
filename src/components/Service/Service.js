import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    console.log(props.service)
    const { name, img, desc, price } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                        <p>Price: {price}</p>
                        <Button variant="success">Purchase Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;