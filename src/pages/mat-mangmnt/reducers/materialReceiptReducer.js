import {
  MATERIAL_RECEIPT_REQUEST,
  MATERIAL_RECEIPT_SUCCESS,
  MATERIAL_RECEIPT_FAILS,
  MATERIAL_HEADER_REGISTER_REQUEST,
  MATERIAL_HEADER_REGISTER_SUCCESS,
  MATERIAL_HEADER_REGISTER_FAIL,
} from "../constants/materialReceiptConstant";

export const materialReceiptReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case MATERIAL_RECEIPT_REQUEST:
      return { loading: true, list: [] };
    case MATERIAL_RECEIPT_SUCCESS:
      return { loading: false, list: action.payload };
    case MATERIAL_RECEIPT_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const materialReceiptHeaderRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case MATERIAL_HEADER_REGISTER_REQUEST:
      return { loading: true };
    case MATERIAL_HEADER_REGISTER_SUCCESS:
      return { loading: false, registerInfo: action.payload };
    case MATERIAL_HEADER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
