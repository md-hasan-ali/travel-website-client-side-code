// Adding necessary file
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Spinner } from 'react-bootstrap';

// Manage All Orders component
const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [deleteCount, setDeleteCount] = useState(null);
    useEffect(() => {
        fetch('https://dreadful-tomb-65730.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [deleteCount])

    // Delete service
    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://dreadful-tomb-65730.herokuapp.com/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setDeleteCount(true)
                } else {
                    setDeleteCount(false)
                }
            })
    }

    return (
        <div>
            <Container className='my-5'>
                <div className="section-title">
                    <h2>Manage All Orders</h2>
                </div>
                {<Row xs={1} md={3} className="g-4">
                    {// Add Spinner
                        manageOrders.length === 0 ?
                            <div className='text-center my-5'>
                                <Spinner animation="border" variant="danger" />
                            </div>
                            :
                            manageOrders.map(manageOrder =>
                                <Col key={manageOrder._id}>
                                    <Card>
                                        <Card.Img variant="top" src={manageOrder.img} />
                                        <Card.Body>
                                            <Card.Title>{manageOrder.name}</Card.Title>
                                            <Card.Text>
                                                {manageOrder.desc}
                                            </Card.Text>
                                            <p>Price: {manageOrder.price}</p>
                                            <Button onClick={() => handleDelete(manageOrder._id)} variant="danger">Delete</Button>{' '}
                                            <Button variant="success">Update</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                    }
                </Row>}
            </Container>
        </div >
    );
};

export default ManageOrders;