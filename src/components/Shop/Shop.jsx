import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    //to take all data that recived by handleAddToCart(event handler)..we need a state here 
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    }, [])

    //handler comes from product jsx cause of react's uni directional behaviour i cant set value from a lower componnet to upper componnet..2.cart(previously added).product newly added.

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product} 
                                                     key={product.id}
                                                     handleAddToCart={handleAddToCart}
                                                     >

                                            </Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;