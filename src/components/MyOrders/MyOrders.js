// Adding Necessarya file
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


// MyOrders Component
const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [deleteUser, setDeleteUser] = useState(null)
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://dreadful-tomb-65730.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))

    }, [deleteUser]);

    // delete 
    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://dreadful-tomb-65730.herokuapp.com/deleteMyorder/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setDeleteUser(true)
                } else {
                    setDeleteUser(false)
                }
            })

    }
    return (
        <div>
            <Container className='my-5'>
                <div className="section-title">
                    <h2>My Orders</h2>
                </div>
                {<Row xs={1} md={3} className="g-4">
                    {// Add Spinner
                        myOrders.length === 0 ?
                            <div className='text-center my-5'>
                                <Spinner animation="border" variant="danger" />
                            </div>
                            :
                            myOrders.map(myOrder =>
                                <Col key={myOrder._id}>
                                    <Card>
                                        <Card.Img variant="top" src={myOrder?.img} />
                                        <Card.Body>
                                            <Card.Title>{myOrder?.name}</Card.Title>
                                            <Card.Text>
                                                {myOrder?.desc}
                                            </Card.Text>
                                            <p>Price: {myOrder?.price}</p>
                                            <p>Status: {myOrder?.status}</p>
                                            <button onClick={() => handleDelete(myOrder?._id)} className='btn btn-danger'>Delete</button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                    }
                </Row>}
            </Container>
        </div>
    );
};

export default MyOrders;