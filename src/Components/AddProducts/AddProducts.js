import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [isTrue, setIsTrue] = useState(true);
    const [message, setMessage] = useState('');

    const onSubmit = (data, e) => {
        e.target.reset();
        alert('Product is added to the Home page');
        setMessage('');

        const eventData = {
            name: data.product,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };

        const url = 'https://rocky-eyrie-30479.herokuapp.com/addProduct';
        console.log(eventData);

        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log(res))

    };


    const handlImageUpload = (event) => {
        setMessage(event.target.files[0]);
        setIsTrue(false);

        const imageData = new FormData();
        imageData.set('key', '28050dc0d4fe7e20fd4f2fdb0ab064f0');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                setIsTrue(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <div className="text-center mt-4 mb-5">

            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="d-flex flex-column justify-content-around">
                    <div className="pb-4">
                        <label htmlFor="" className="d-block">Fruit Name</label>
                        <input name="product" placeholder="Enter Fruit Name" ref={register} required />
                    </div>

                    <div className="pb-4">
                        <label htmlFor="" className="d-block">Price</label>
                        <input name="price" placeholder="Enter Price" ref={register} required />
                    </div>

                    <div className="pb-4">
                        <label htmlFor="" className="d-block">Quantity</label>
                        <input name="weight" placeholder="Enter Quantity" ref={register} required />
                    </div>

                    <div className="pb-4">
                        <label htmlFor="" className="d-block">Choose a photo</label>

                        <label className="custom-file-upload">
                            <input type="file" onChange={handlImageUpload} />
                            Add Photo
                        </label>

                        {
                            message && <small className="ml-2">{message} is selected.</small>
                        }

                    </div>

                    {
                        isTrue ?
                            <div className="text-right">
                                <button type="submit" className="btn btn-outline-info btn-block">Save</button>
                            </div>
                            :
                            <div className="spinner-border text-primary spinner-2" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                    }


                </div>

            </form>
        </div>
    );
};

export default AddProducts;