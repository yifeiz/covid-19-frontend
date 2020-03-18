import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import submitReducer from "./submitReducer";
export default combineReducers({
  form: formReducer,
  submit: submitReducer
});
