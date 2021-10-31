// Import Necessary file 
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, Button } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

// Services Component 
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://dreadful-tomb-65730.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container className='my-5'>
            <div className="section-title">
                <h2>Our Main Services</h2>
            </div>
            { // Add Spinner
                services.length === 0 ? <div className='text-center'>
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                </div> : <Row xs={1} md={3} className="g-4">
                    {
                        services.map((service) => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </Row>}
        </Container>
    );
};

export default Services;