import React, { useContext } from 'react';
import { UserContext } from '../../App';

const CheckOut = () => {
    const { value1, value2 } = useContext(UserContext);
    const [itemInfo, setItemInfo] = value2;
    const [loggedInUser, setLoggedInUser] = value1;

    const handleCheckOut = () => {
        const checkoutItem = { ...itemInfo, date: new Date(), email: loggedInUser.email };

        fetch('https://rocky-eyrie-30479.herokuapp.com/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(checkoutItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Product is added to the cart')
            })
    }


    return (
        <div className="text-center w-50 mx-auto mt-5">
            <h1>CheckOut</h1>
            <div className="jumbotron">
                <div className="d-flex justify-content-between">
                    <h5>Description</h5>
                    <h5>Quantity</h5>
                    <h5>Price</h5>
                </div>

                <hr className="my-2" />
                <div className="d-flex justify-content-between">
                    <h6>{itemInfo.name}</h6>
                    <h6>1</h6>
                    <h6>${itemInfo.price}</h6>
                </div>
                <hr className="my-2" />
                <div className="d-flex justify-content-between">
                    <h6>Total</h6>
                    <h6>${itemInfo.price}</h6>
                </div>

            </div>
            <div className="text-right">

                <button type="button" onClick={handleCheckOut} className="btn btn-success">
                    CheckOut
                </button>

            </div>

        </div>
    );
};

export default CheckOut;