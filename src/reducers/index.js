import {combineReducers} from "redux";
import videos from "./videoReducer.js";


const rootReducer = combineReducers({
    videos
})

export default rootReducer;