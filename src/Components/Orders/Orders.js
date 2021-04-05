import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { value1 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;
    
    useEffect(() => {
        fetch('https://rocky-eyrie-30479.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [loggedInUser.email])

    const handleRemoveItems = (e,id) => {
        
        fetch(`https://rocky-eyrie-30479.herokuapp.com/remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.text())
            .then(data => {
                e.target.parentNode.style.display = 'none';
                console.log(data)
            })

    }

    return (
        <div>
            
            {
                orders.map((order, index) =>
                    <div className="jumbotron w-50 mx-auto mb-0" key={index}>
                        <h2 className="text-capitalize mb-3">{order.name}</h2>
                        <h4>Price: ${order.price}</h4>
                        <h4>Quantity: {order.weight}Kg</h4>
                        <h4 className="text-nowrap">Order Time: {order.date}</h4>
                        <button className="btn btn-danger mt-3" onClick={(e) => handleRemoveItems(e, order._id)}>Remove item</button>
                        <hr className="my-4" />
                    </div>


                )
            }
        </div>
    );
};

export default Orders;