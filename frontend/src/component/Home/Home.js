import React , { Fragment , useEffect} from 'react';
import {BsMouse2Fill} from 'react-icons/bs';
import "./Home.css"
import Product from "./Product.js";
import MetaData from "../layout/MetaData.js";
import {getProduct} from "../../actions/productAction";
import{ useSelector, useDispatch} from "react-redux";
import Loader from  "../layout/Loader/Loader.js";
import { useAlert } from 'react-alert';




// const products = {
//     name: "Blue",
//     images: [{url: "http://i.ibb.co/DRST11n/1.webp"}],
//     price:"3000",
//     _id:"anish",
    
// }


const Home = () => {

    const alert = useAlert()

    const dispatch = useDispatch();
    const { loading, error , products } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }
        dispatch(getProduct())
    }, [dispatch, error, alert]);

    
    return (
        <Fragment>
            {loading ? <Loader /> : <Fragment>

              <MetaData title= "DANSEM"/>

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
          {products && products.map( product =>   
          <Product  product = {product} /> )};
        </div>


         </Fragment>}

        </Fragment>
    
      );
    };   



export default Home;
