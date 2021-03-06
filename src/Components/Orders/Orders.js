import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { value1 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [isRemoved, setIsRemoved] = useState(true);

    useEffect(() => {
        fetch('https://rocky-eyrie-30479.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [loggedInUser.email, isRemoved])

    const handleRemoveItems = (e, id) => {

        fetch(`https://rocky-eyrie-30479.herokuapp.com/remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.text())
            .then(data => {
                e.target.parentNode.parentNode.style.display = 'none';
                setIsRemoved(!isRemoved);
            })

    }

    return (
        <div>
            <h1 className="text-center mt-3">You have ordered {orders.length ? orders.length : 'no'} products</h1>
            {
                orders.map((order, index) =>
                    <div className="jumbotron w-50 mx-auto my-3 py-3 row" key={index}>
                        
                        <div className="col-md-3">
                            <img src={order.image} alt={order.name} style={{ maxWidth: '100%', display: 'block', marginTop: '50%' }} />
                        </div>

                        <div className="col-md-9">
                            <h2 className="text-capitalize mb-3">{order.name}</h2>
                            <h4>Price: ${order.price}</h4>
                            <h4>Quantity: {order.weight}Kg</h4>
                            <h4 className="text-nowrap">Order Time: {order.date.substring(0, 10)}</h4>
                            <button className="btn btn-danger mt-3" onClick={(e) => handleRemoveItems(e, order._id)}>Remove item</button>
                            <hr className="my-4" />
                        </div>

                    </div>


                )
            }
        </div>
    );
};

export default Orders;