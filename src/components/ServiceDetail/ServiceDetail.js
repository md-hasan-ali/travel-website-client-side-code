// Adding Necessary file 
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

// ServiceDetail component 
const ServiceDetail = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://dreadful-tomb-65730.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const matchService = details.find((service) => service._id === id);
    // const handleAddToCart = () => {
    //     const service = matchService;
    //     service.email = user.email;
    //     service.name = user.displayName;
    //     console.log(service)
    // }

    // react hook form 
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

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
                        <div className="booking-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user?.displayName || ''} {...register("name")} />

                                <input defaultValue={user?.email || ''} {...register("email")} />

                                <input defaultValue={matchService?.name || ''} {...register("ProductName")} />

                                {/* <input value={matchService?.img || ''} type='url' placeholder='Image Url' {...register("img")} /> */}

                                <input defaultValue={matchService?.img || ''}  {...register("img")} />


                                <input defaultValue={matchService?.price || ''} {...register("price")} />

                                <textarea placeholder='Address' {...register("address")} />

                                <input type="submit" className='btn btn-danger' value="Booking Confirm" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;