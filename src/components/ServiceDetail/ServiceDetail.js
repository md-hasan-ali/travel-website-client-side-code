// Adding Necessary file 
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css'
import { useForm } from "react-hook-form";

// ServiceDetail component 
const ServiceDetail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const matchService = details.find(service => service._id === id);

    // React Hook form
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='service-details'>
            <div className="section-title">
                <h2>Service Details and Place Order</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="service-detail-content">
                            <img src={matchService?.img} alt="" />
                            <h2>Name : {matchService?.name}</h2>
                            <p>Description : {matchService?.desc}</p>
                            <p>Price : {matchService?.price}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="placeOrder-form">
                            <h4>Book This Service</h4>
                            <div className="booking-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input placeholder='Frist Name' {...register("firstName")} />
                                    <input placeholder='Last Name' {...register("lastName")} />
                                    <input type='email' placeholder='Your Email' {...register("email")} />
                                    <input placeholder='Phone Number' type="number" {...register("phone")} />
                                    <input type='date' {...register("date")} />
                                    <input type="submit" value="Place Order" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;