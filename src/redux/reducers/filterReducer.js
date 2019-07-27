import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default (state = initialState.filters, action) => {
  switch (action.type) {
    case types.FILTER_TEXT:
      debugger;
      return {
        ...state,
        text: action.text
      };
    case types.START_YEAR:
      return {
        ...state,
        startYear: action.startYear
      };
    case types.END_YEAR:
      return {
        ...state,
        endYear: action.endYear
      };
    case types.SORT_BY:
      return {
        ...state,
        sortBy: action.sortType
      };
    case types.CLEAR:
      return {
        ...state,
        text: action.defaultFilter.text,
        sortBy: action.defaultFilter.sortBy,
        startYear: action.defaultFilter.startYear,
        endYear: action.defaultFilter.endYear
      };
    default:
      return state;
  }
};
