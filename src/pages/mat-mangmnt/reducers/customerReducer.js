import {
    CUSTOMER_LIST_REQUEST,
    CUSTOMER_LIST_SUCCESS,
    CUSTOMER_LIST_FAILS,
  } from "../constants/customerConstant";

export const customerListReducer = (state = { customers: [] }, action) => {
    switch (action.type) {
      case CUSTOMER_LIST_REQUEST:
        return { loading: true, customers: [] };
      case CUSTOMER_LIST_SUCCESS:
        return { loading: false, customers: action.payload };
      case CUSTOMER_LIST_FAILS:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };