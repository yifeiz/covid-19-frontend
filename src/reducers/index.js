import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import submitReducer from "./submitReducer";
import cookieReducer from "./cookieReducer";

export default combineReducers({
  form: formReducer,
  HTML: submitReducer,
  cookieExists: cookieReducer
});
