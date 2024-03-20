import { combineReducers } from "redux";
import TypeReducer from "./TypeReducer";


 


const rootReducer=combineReducers({
    type:TypeReducer,
     
})

export default rootReducer;