import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, img, desc, price, key } = props.service;
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
                        <Link to={`serviceDetails/${key}`}>
                            <Button variant="success">Purchase Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;