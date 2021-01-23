/////combine reducer!

import counterReducer from "./counter";
import logReducer from "./logged";
import { combineReducers } from "redux";
import FormDetails from "./FormList";
import preFormDetails from "./prevList";

const allReducers = combineReducers({
  counter: counterReducer,
  islogged: logReducer,
  formList: FormDetails,
  prevList: preFormDetails,
});

export default allReducers;
