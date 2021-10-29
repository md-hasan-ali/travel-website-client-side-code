// Adding Necessary file 
import React from 'react';
import { Container, FormControl, InputGroup, Row, Button, Col } from 'react-bootstrap';
import './Subscribe.css'

// Subscirbe Component 
const Subscribe = () => {
    return (
        <>
            <Container className='subscribe-area'>
                <Row>
                    <Col>
                        <div className="subscribe">
                            <h2>Subscribe To Our Newsletter For Latest Update</h2>
                            <InputGroup className="mb-3" size='lg'>
                                <FormControl
                                    placeholder="Your Email Address"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="danger" id="button-addon2">
                                    Subscribe now
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Subscribe;