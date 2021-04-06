import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css';



const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://rocky-eyrie-30479.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className="container-fluid">
            <div className="row mx-auto pb-2">
                {
                    products.length === 0 && <div className="spinner-border text-primary spinner" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }
                {
                    products.map((product, index) => <Products product={product} key={index} />)
                }
            </div>
        </div>

    );
};

export default Home;