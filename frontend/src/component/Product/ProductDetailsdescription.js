import { useEffect } from "react";
import { useLocation } from "react-router-dom";



function ProductDetailsdescription() {

    const locator = useLocation();

    useEffect(() => {
        console.log(locator)
    })
    return (
        <div>

        </div>
    )
}

export default ProductDetailsdescription;