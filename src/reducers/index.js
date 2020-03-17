import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import pageReducer from "./pageReducer";

export default combineReducers({
  form: formReducer,
  trackSymptomsForm: pageReducer
});
