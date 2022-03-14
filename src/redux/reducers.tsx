import { SET_NEWS_DATA } from "./actions";

const initialState = {
    newsData: []
}

function newsReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_NEWS_DATA:
            return { ...state, newsData: action.payload }
        default:
            return state;
    }
}

export default newsReducer;