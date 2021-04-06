import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './Product.css';

const Products = ({ product }) => {
    const { value2 } = useContext(UserContext);
    const [itemInfo, setItemInfo] = value2;
    const history = useHistory();

    const handlePurchase = (name) => {
        history.push(`/checkout/${name}`);

        let newitemInfo = {
            ...itemInfo,
            name: product.name,
            price: product.price,
            weight: product.weight
        }

        setItemInfo(newitemInfo);
    }

    return (
        <div className="col-md-4 mb-3 d-flex justify-content-center">
        
            <div className="card my-card mt-5 d-flex justify-content-between" id='card' style={{width: '18rem'}}>
                <div className="img-container">
                    <img className="card-img-top" src={product.imageURL} alt="" />
                </div>

                <div className="card-body pt-0 mt-0">

                    <h3>{product.name}</h3>

                    <div className="d-flex justify-content-between mt-3 mb-0">
                        <h5>{product.weight} Kg</h5>
                        <h5>${product.price}</h5>
                    </div>

                </div>

                <div className="btn-container">
                    <button onClick={() => handlePurchase(product.name)} type="button" className="btn btn-dark btn-lg btn-block">Buy Now</button>

                </div>
            </div>


        </div>
    );
};

export default Products;