import React, { useState } from 'react';
import AddProducts from '../AddProducts/AddProducts';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const Admin = () => {
    const [isAddShown, setIsAddShown] = useState(true);

    return (
        <div className="row">
            <div className="col-md-3 bg-secondary">
                <div className="d-flex flex-column justify-content-between mt-4">

                    {
                        isAddShown ? <button onClick={() => setIsAddShown(true)} className="border-0 text-dark h2 py-2 ml-2 bg-light">Add Prodcut</button> :
                            <button onClick={() => setIsAddShown(true)} className="border-0 text-light h2 py-2 ml-2 bg-transparent">Add Prodcut</button>

                    }

                    {
                        isAddShown ? <button onClick={() => setIsAddShown(false)} className="border-0 text-light h2 py-2 ml-2 bg-transparent">Delete Prodcut</button> : <button onClick={() => setIsAddShown(false)} className="border-0 text-dark h2 py-2 ml-2 bg-light">Delete Prodcut</button>

                    }

                </div>
            </div>

            <div className="col-md-9">
                {
                    isAddShown ? <AddProducts /> : <DeleteProduct />
                }
            </div>
        </div>
    );
};

export default Admin;