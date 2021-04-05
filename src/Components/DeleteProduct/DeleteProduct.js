import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const DeleteProduct = () => {
    const [orderedItems, setOrderedItems] = useState([]);

    useEffect(() => {
        fetch('https://rocky-eyrie-30479.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrderedItems(data))
    }, [])

    const handleDelete = (id, e) => {

        fetch(`https://rocky-eyrie-30479.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.text())
            .then(data => {
                e.target.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
               
            })

    }

    return (
        <div className="container">
            <table className="table mt-5">
                <thead>
                    <tr className="text-center">
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    orderedItems.map(item =>

                        <tbody key={item._id}>
                            <tr className="text-center">
                                <td>{item.name}</td>
                                <td>{item.weight} Kg</td>
                                <td>${item.price}</td>
                                <td><button onClick={(e) => handleDelete(item._id, e)} className="bg-danger text-white border-0 rounded"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default DeleteProduct;