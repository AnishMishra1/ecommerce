import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstant"




export const productReducer = 
(state = { products: [] }, actions) => {

      switch (actions.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: [],
            };

        case ALL_PRODUCT_SUCCESS:
             return {
                loading: false,
                products: actions.payload.products,
                productsCount: actions.payload.productsCount,
            };

         case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: actions.payload,
            };

         case CLEAR_ERRORS:
            return {
                ...state,
                error:null,
            };

        default:
            return state;
      }

};

export const productDetailsReducer = 
(state = { product: {} }, actions) => {

      switch (actions.type) {
        case  PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            };

        case PRODUCT_DETAILS_SUCCESS:
             return {
                loading: false,
                product: actions.payload,
                
            };

         case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: actions.payload,
            };

         case CLEAR_ERRORS:
            return {
                ...state,
                error:null,
            };

        default:
            return state;
      }

};