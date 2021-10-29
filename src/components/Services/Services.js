// Import Necessary file 
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

// Services Component 
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container className='my-5'>
            <div className="section-title">
                <h2>Our Main Services</h2>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    >
                    </Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;