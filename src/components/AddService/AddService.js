// Adding Necessary file 
import React from 'react';
import { useForm } from "react-hook-form";
import './Add.css'

// Add Services Component 
const AddService = () => {
    // React Hook form
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Data Inserted Successfully..')
                }
            })
    };


    return (
        <div className="container my-5">
            <div className="section-title">
                <h2>Add a New Service</h2>
            </div>
            <div className='row'>
                <div className="col-md-6 mx-auto">
                    <div className="add-service">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='Your Name' {...register("name")} />
                            <input type='url' placeholder='Image Url' {...register("img")} />
                            <input placeholder='price' type="number" {...register("price")} />
                            <textarea placeholder='Description' type="text" {...register("desc")} />

                            <input type="submit" value="Add Service" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;