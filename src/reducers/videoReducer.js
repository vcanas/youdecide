const defaultState = {
    videos: []
};


export default function videoReducer(state = defaultState, action){
    switch(action.type){
        case "ADD_VIDEO":
            return {...state, videos: [...state.videos, action.videoId]}

        default:
            return state;
    }
}