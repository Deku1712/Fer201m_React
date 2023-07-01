

import { createStore } from "redux";
const initalState = {
    count: 0
}
function reducer(state = initalState , action){
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state, count: state.count + 1
            };
        case 'DECREMENT': 
            if(state.count > 0){
                return {...state, count: state.count -1}
            };
        default: return state;
    }


}
const store = createStore(reducer);
export default store;
