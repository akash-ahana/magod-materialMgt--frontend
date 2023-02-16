import axios from "axios";
import {
  getPartListByCreated,
  getPartListByReceived,
  getPartListByClosed,
  getUnitListByCreated,
  getUnitListByReceived,
  getUnitListByClosed,
  getSheetListByCreated,
  getSheetListByReceived,
  getSheetListByClosed,
  materialHeaderReceiptRegister,
  materialHeaderReceiptRegisterUpdate,
} from "../Api";
import {
  MATERIAL_RECEIPT_REQUEST,
  MATERIAL_RECEIPT_SUCCESS,
  MATERIAL_RECEIPT_FAILS,
  MATERIAL_HEADER_REGISTER_REQUEST,
  MATERIAL_HEADER_REGISTER_FAIL,
  MATERIAL_HEADER_REGISTER_SUCCESS,
  MATERIAL_HEADER_REGISTER_UPDATE_REQUEST,
  MATERIAL_HEADER_REGISTER_UPDATE_FAIL,
  MATERIAL_HEADER_REGISTER_UPDATE_SUCCESS,
} from "../constants/materialReceiptConstant";

export const getMaterialReceiptByType = (type1, type2) => async (dispatch) => {
  try {
    dispatch({ type: MATERIAL_RECEIPT_REQUEST });

    if (type1 === "Created" && type2 === "Parts") {
      const { data } = await axios.get(getPartListByCreated);
      dispatch({
        type: MATERIAL_RECEIPT_SUCCESS,
        payload: data,
      });
    }

    if (type1 === "Received" && type2 === "Parts") {
      const { data } = await axios.get(getPartListByReceived);
      dispatch({
        type: MATERIAL_RECEIPT_SUCCESS,
        payload: data,
      });
    }

    if (type1 === "Closed" && type2 === "Parts") {
      const { data } = await axios.get(getPartListByClosed);
      dispatch({
        type: MATERIAL_RECEIPT_SUCCESS,
        payload: data,
      });
    }
    if (type1 === "Created" && type2 === "Units") {
      const { data } = await axios.get(getUnitListByCreated);
      dispatch({
        type: MATERIAL_RECEIPT_SUCCESS,
        payload: data,
      });
    }

    if (type1 === "Received" && type2 === "Units") {
      const { data } = await axios.get(getUnitListByReceived);
      dispatch({
        type: MATERIAL_RECEIPT_SUCCESS,
        payload: data,
      });
    }

    if (type1 === "Closed" && type2 === "Units") {
      const { data } = await axios.get(getUnitListByClosed);
      dispatch({
        type: MATERIAL_RECEIPT_SUCCESS,
        payload: data,
      });
    }
    if (type1 === "Created" && type2 === "Sheets") {
      const { data } = await axios.get(getSheetListByCreated);
      dispatch({
        type: MATERIAL_RECEIPT_SUCCESS,
        payload: data,
      });
    }

    if (type1 === "Received" && type2 === "Sheets") {
      const { data } = await axios.get(getSheetListByReceived);
      dispatch({
        type: MATERIAL_RECEIPT_SUCCESS,
        payload: data,
      });
    }

    if (type1 === "Closed" && type2 === "Sheets") {
      const { data } = await axios.get(getSheetListByClosed);
      dispatch({
        type: MATERIAL_RECEIPT_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: MATERIAL_RECEIPT_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const materialHeaderRegisterAction = (body) => async (dispatch) => {
  try {
    dispatch({ type: MATERIAL_HEADER_REGISTER_REQUEST });
    const config = { headers: { "Contnet-Type": "application/json" } };
    const { data } = await axios.post(
      materialHeaderReceiptRegister,
      body,
      config
    );
    dispatch({
      type: MATERIAL_HEADER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MATERIAL_HEADER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const materialHeaderRegisterUpdateAction =
  (body) => async (dispatch) => {
    try {
      dispatch({ type: MATERIAL_HEADER_REGISTER_UPDATE_REQUEST });
      const config = { headers: { "Contnet-Type": "application/json" } };
      const { data } = await axios.put(
        materialHeaderReceiptRegisterUpdate,
        body,
        config
      );
      dispatch({
        type: MATERIAL_HEADER_REGISTER_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: MATERIAL_HEADER_REGISTER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
