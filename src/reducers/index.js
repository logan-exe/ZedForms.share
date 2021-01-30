/////combine reducer!

import counterReducer from "./counter";
import logReducer from "./logged";
import { combineReducers } from "redux";
import FormDetails from "./FormList";
import preFormDetails from "./prevList";
import resList from "./ResponseList";

const allReducers = combineReducers({
  counter: counterReducer,
  islogged: logReducer,
  formList: FormDetails,
  prevList: preFormDetails,
  resList: resList,
});

export default allReducers;
