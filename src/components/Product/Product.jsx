import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, quantity, price, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

    // const handleAddToCart = (product) =>{
    //     console.log(product);
    // }

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(name)}>Add to Cart</button>
        </div>
    );
};

export default Product;