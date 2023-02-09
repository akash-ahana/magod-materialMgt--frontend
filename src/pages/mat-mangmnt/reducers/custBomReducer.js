import {
  PART_LIST_REQUEST,
  PART_LIST_SUCCESS,
  PART_LIST_FAILS,
} from "../constants/custBomConstant";

export const custBomReducer = (state = { parts: [] }, action) => {
  switch (action.type) {
    case PART_LIST_REQUEST:
      return { loading: true, parts: [] };
    case PART_LIST_SUCCESS:
      return { loading: false, parts: action.payload };
    case PART_LIST_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
