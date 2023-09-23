import React, { Fragment, useEffect} from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";




const ProductDetails = () => {

    const params =useParams()
    const locator = useLocation();
    

    const dispatch = useDispatch();

    const {product} = useSelector(
        (state) => state.productDetails
    );

    useEffect(() => {
        console.log(locator);

        dispatch(getProductDetails(params.id))
     

    }, [dispatch, locator, params.id]);

    return (
        <Fragment>
            <div className="ProductDetails">
                <div>
                    <Carousel>
                        {product.Images &&
                        product.Images.map((item , i) => (
                            <img
                               className="CarouselImage"
                               key={item.url}
                               src={item.url}
                               alt= {`${i} Slide`}
                             />  
                        ))}
                    </Carousel>
                </div>
            </div>
        </Fragment>
    )
};

export  default ProductDetails;