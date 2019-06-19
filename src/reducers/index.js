import { combineReducers } from "redux";
import { reducer as formREducer } from "redux-form";

const rootReducer = combineReducers({
  form: formREducer
});

export default rootReducer;
