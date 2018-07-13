import { createStore, compose } from "redux";
import rootReducer from "../reducers";
import reduxImutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState={}){
    return createStore(
        rootReducer,
        initialState,
        compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}