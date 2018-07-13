
export default function videoReducer(state = [], action){
    switch(action.type){
        case "ADD_VIDEO":
            return [...state, Object.assign({}, action.video)]

        default:
            return state;
    }
}