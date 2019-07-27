import * as types from "./actionTypes";
import { initialState } from "../reducers/initialState";

export const filterText = (text = "") => ({
  type: types.FILTER_TEXT,
  text
});

export const startYear = startYear => ({
  type: types.START_YEAR,
  startYear
});

export const endYear = endYear => ({
  type: types.END_YEAR,
  endYear
});

export const sortBy = sortType => ({
  type: types.SORT_BY,
  sortType
});

export const clear = () => ({
  type: types.CLEAR,
  defaultFilter: initialState.filters
});
