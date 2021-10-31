// Adding Necessary file 
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import './ServiceDetail.css'
// import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

// ServiceDetail component 
const ServiceDetail = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('https://dreadful-tomb-65730.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const matchService = details.find((service) => service._id === id);
    const handleAddToCart = () => {
        const service = matchService;
        service.email = user.email;
        service.ProductName = user.displayName;
        fetch('https://dreadful-tomb-65730.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data === true) {
                    alert('Orders Completed Successfully..');
                    history.push('/home')
                }
            })
    }

    // react hook form 
    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    // };

    return (
        <div className='service-details'>
            <div className="section-title">
                <h2>Service Details and Place Order</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="service-detail-content">
                            <img src={matchService?.img} alt="" />
                            <h2>Name : {matchService?.name}</h2>
                            <p>Description : {matchService?.desc}</p>
                            <p>Price : {matchService?.price}</p>
                            <button onClick={handleAddToCart} className='btn btn-danger'>Booking Confirm</button>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="booking-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user?.displayName || ''} {...register("name")} />

                                <input defaultValue={user?.email || ''} {...register("email")} />

                                <input defaultValue={matchService?.name || ''} {...register("ProductName")} />

                                <input value={matchService?.img || ''} type='url' placeholder='Image Url' {...register("img")} />

                                <input defaultValue={matchService?.img || ''}  {...register("img")} />


                                <input defaultValue={matchService?.price || ''} {...register("price")} />

                                <textarea placeholder='Address' {...register("address")} />

                                <input type="submit" className='btn btn-danger' value="Booking Confirm" />
                            </form> 
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;