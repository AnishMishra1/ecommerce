import React , { Fragment} from 'react';
import {BsMouse2Fill} from 'react-icons/bs';
import "./Home.css"
import Product from "./Product.js"

const product = {
    name: "Blue",
    images: [{url: "http://i.ibb.co/DRST11n/1.webp"}],
    price:"3000",
    _id:"anish",
    
}


const Home = () => {
    return <Fragment>

        <div className = "banner">
            <p>Welcome to PurunMool Ecommerce</p>
            <h1>FIND AMAZING PRODUCT BELOW</h1>

            <a href='#container'>
                <button>
                Scroll <BsMouse2Fill/>
                </button>
            </a>

        </div>

        <h2 className='homeHeading'> Featured Product</h2>

        <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        </div>
        

    </Fragment>
}

export default Home;
