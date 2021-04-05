import React, { useState } from 'react';
import AddProducts from '../AddProducts/AddProducts';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const Admin = () => {
    const [isAddShown, setIsAddShown] = useState(true);

    return (
        <div className="container">
            <div className="d-flex justify-content-between mt-4">
                <button onClick={() => setIsAddShown(true)} className="border-0 text-primary h2">Add Prodcut</button>
                <button onClick={() => setIsAddShown(false)} className="border-0 text-primary h2">Delete Prodcut</button>
            </div>

            {
                isAddShown ? <AddProducts /> : <DeleteProduct />
            }

        </div>
    );
};

export default Admin;