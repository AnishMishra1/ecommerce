import React  from 'react';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component"




const Product = ( {product}) => {

    const options ={
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size:window.innerWidth <600 ? 20 :25,
        value:product.rating,
        isHalf: true,
    };
    return (
        <Link className="productCard" to={`/product/${product._id}`}>
         

              {/* Adding Images[0].url is remain */}

             <img src={product.Images[0].url} alt={product.name} />  


            <p>{product.name}</p>
            <div>
                <ReactStars {...options} /> <span>({product.numOfReviews}) Reviews</span>
            </div>
            <span>{`Rs ${product.price}`}</span>
        </Link>

    );

};

export default Product;