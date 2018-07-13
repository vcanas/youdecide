import { createStore, compose } from "redux";
import rootReducer from "../reducers";

export default function configureStore(initialState={}){
    return createStore(
        rootReducer,
        initialState,
        compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}