import axios from "axios";
import { getCustBomList } from "../Api";
import {
  PART_LIST_REQUEST,
  PART_LIST_SUCCESS,
  PART_LIST_FAILS,
} from "../constants/custBomConstant";

export const custBomList = () => async (dispatch) => {
  try {
    dispatch({ type: PART_LIST_REQUEST });
    const { data } = await axios.get(getCustBomList);
    dispatch({
      type: PART_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PART_LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
