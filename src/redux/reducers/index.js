import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import filters from "./filterReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses, // can omit the right side (shorthand)
  authors,
  filters,
  apiCallsInProgress
});

export default rootReducer;
