import { createStore } from "redux";
import { combineForms } from "react-redux-form";
const initalState = {
    count: 0,
    firstName: '',
    lastName: '',
    email: ''

}


const userReducer = combineForms({
    user:initalState
});


const store = createStore(userReducer);
export default store;
